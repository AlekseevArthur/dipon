class Form2sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, only: %i[create destroy]

  def new; end

  def create
    @form2f = Form2.new(form2f_params)
    @form2f.organization_id = current_user.organization.id
    @form2s = Form2.new(form2s_params)
    @form2s.organization_id = current_user.organization.id

    Form2.transaction do
      @form2f.save!
      @form2s.save!
    end
    respond_to do |format|
      if Form2.exists?(@form2f.id) && Form2.exists?(@form2s.id)
        format.json { render json: @form2f, status: :created }
      else
        format.json { render json: @form2f.errors, status: :unprocessable_entity }
      end
      format.html
    end
  end

  def form2f_params
    puts params
    params.require(:form2f).permit!
  end

  def form2s_params
    puts params
    params.require(:form2s).permit!
  end
end
