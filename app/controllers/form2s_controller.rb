# frozen_string_literal: true

# dfsdfsd
class Form2sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, only: %i[create destroy]

  def create
    respond_to do |format|
      if params[:form2][:id]
        @form2 = Form2.find(params[:form2][:id])
        if @form2.update(form2_params)
          format.json { render json: @form2, status: :created }
        else
          format.json { render json: @form2.errors, status: :unprocessable_entity }
        end
      else
        @form2 = Form2.new(form2_params)
        @form2.organization_id = current_user.organization.id
        if @form2.save!
          format.json { render json: @form2, status: :created }
        else
          format.json { render json: @form2.errors, status: :unprocessable_entity }
        end
      end
      format.html
    end
  end

  def new
    @last_year_form = Form2.find_by reporting_date: "#{params[:year].to_i - 1}.01.01"
    @form_edit_data = Form2.find_by reporting_date: "#{params[:year]}.01.01"
  end

  def form2_params
    params.require(:form2).permit!
  end
end
