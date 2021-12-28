class DashboardsController < ApplicationController
  def show
    @form1 = current_user.organization.form1s
    
  end
end
