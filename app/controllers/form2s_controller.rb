class Form2sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, only: %i[create destroy]
  
  def new; end

  def create
    @form2 = Form2.new(form2_params)
    @form2.organization_id = current_user.organization.id
    respond_to do |format|
      if @form2.save!
        format.json { render json: @form2, status: :created }
      else
        format.json { render json: @form2.errors, status: :unprocessable_entity }
      end
      format.html
    end
  end

  def form2_params
    puts params
    params.require(:form2).permit!
  end
end
