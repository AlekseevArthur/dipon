# frozen_string_literal: true

# dfsdfsd
class Form1sController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_form1, only: %i[show destroy update]
  before_action :authenticate_user!, only: %i[create destroy]

  def create
    @form1f = Form1.new(form1f_params)
    @form1f.organization_id = current_user.organization.id
    @form1s = Form1.new(form1s_params)
    @form1s.organization_id = current_user.organization.id

    Form1.transaction do
      @form1f.save!
      @form1s.save!
    end

    respond_to do |format|
      if Form1.exists?(@form1f.id) && Form1.exists?(@form1s.id)
        format.json { render json: @form1f, status: :created }
      else
        format.json { render json: @form1f.errors, status: :unprocessable_entity }
      end
      format.html
    end
  end

  def new; end

  def form1f_params
    params.require(:form1f).permit!
  end

  def form1s_params
    params.require(:form1s).permit!
  end
end
