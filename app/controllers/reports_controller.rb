class ReportsController < ApplicationController
  def show
    if params[:type] == '1'
      @type = '1'
      @result = ReportFinRez.call(year: params[:year]).result
    elsif params[:type] == '2'
      @type = '2'
      @result = ReportCompBal.call(year: params[:year]).result
    end
  end
end
