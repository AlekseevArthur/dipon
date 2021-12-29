class Form4sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, only: %i[create destroy]
  def new; end

  def create
    @form4 = Form4.new(form4_params)
    @form4.organization_id = current_user.organization.id
    respond_to do |format|
      if @form4.save!
        format.json { render json: @form4, status: :created }
      else
        format.json { render json: @form4.errors, status: :unprocessable_entity }
      end
      format.html
    end
  end

  def form4_params
    puts params
    params.require(:form4).permit!
  end
end
