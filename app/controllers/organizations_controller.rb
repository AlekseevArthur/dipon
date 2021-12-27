class OrganizationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @organization = current_user.organization
    respond_to do |format|
      if @organization.update(line_item_params)
        format.html
        format.json
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @organization.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def line_item_params
    params.require(:organization).permit!
  end
end
