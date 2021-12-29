class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  
  def show
    @user = current_user
  end
end
