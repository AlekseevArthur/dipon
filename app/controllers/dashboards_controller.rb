class DashboardsController < ApplicationController
  def show
    @forms1 = current_user.organization.form1s
    @forms2 = current_user.organization.form2s
    @forms4 = current_user.organization.form4s
  end
end
