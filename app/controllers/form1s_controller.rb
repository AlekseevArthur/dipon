# frozen_string_literal: true

# dfsdfsd
class Form1sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_form1, only: %i[show destroy update]
  before_action :authenticate_user!, only: %i[create destroy]

  def create
    respond_to do |format|
      if params[:form1][:id]
        @form1 = Form1.find(params[:form1][:id])
        if @form1.update(form1_params)
          format.html { render :new, status: :ok }
          format.json { render json: @form1, status: :created }
        else
          format.json { render json: @form1.errors, status: :unprocessable_entity }
          format.html { render :new, status: :unprocessable_entity }
        end
      else
        @form1 = Form1.new(form1_params)
        @form1.organization_id = current_user.organization.id
        if @form1.save!
          format.html { render :new, status: :ok }
          format.json { render json: @form1, status: :created }
        else
          format.json { render json: @form1.errors, status: :unprocessable_entity }
          format.html { render :new, status: :unprocessable_entity }
        end
      end
    end
  end

  def new
    @last_year_form = Form1.find_by reporting_date: "#{params[:year].to_i - 1}.01.01"
    @form_edit_data = Form1.find_by reporting_date: "#{params[:year]}.01.01"
  end

  def form1_params
    params.require(:form1).permit!
  end
end
