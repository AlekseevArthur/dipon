class Form4sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, only: %i[create destroy]

  def create
    puts form4_params
    respond_to do |format|
      if params[:form4][:id]
        @form4 = Form4.find(params[:form4][:id])
        if @form4.update(form4_params)
          format.json { render json: @form4, status: :created }
        else
          format.json { render json: @form4.errors, status: :unprocessable_entity }
        end
      else
        @form4 = Form4.new(form4_params)
        @form4.organization_id = current_user.organization.id
        if @form4.save!
          format.json { render json: @form4, status: :created }
        else
          format.json { render json: @form4.errors, status: :unprocessable_entity }
        end
      end
      format.html
    end
  end

  def new
    @form_edit_data = Form4.find_by reporting_date: "#{params[:year]}.01.01"
  end

  def form4_params
    params.require(:form4).permit!
  end
end
