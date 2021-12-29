# dfsdfsd
class Form1sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_form1, only: %i[show destroy update]
  before_action :authenticate_user!, only: %i[create destroy]

  def create
    @form1 = Form1.new(form1_params)
    @form1.organization_id = current_user.organization.id
    respond_to do |format|
      if @form1.save
        format.json { render json: @form1, status: :created }
      else
        format.json { render json: @form1.errors, status: :unprocessable_entity }
      end
      format.html
    end
  end

  def new; end

  def form1_params
    params.require(:form1).permit!
  end
end
