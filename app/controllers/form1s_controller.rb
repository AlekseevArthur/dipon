# dfsdfsd
class Form1sController < ApplicationController
  before_action :set_form1, only: %i[show destroy update]
  before_action :authenticate_user!, only: %i[create destroy]
  def index; end

  def create
    @form1 = Form1.new(form1_params)
    respond_to do |format|
      if @comment.save!
        format.json { render json: @comment, status: :created }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
      format.html
    end
  end

  def new; end

  def form1_params
    params.require(:form1).permit!
  end
end
