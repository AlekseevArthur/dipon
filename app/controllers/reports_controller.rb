class ReportsController < ApplicationController
  def show
    @result = ReportFinRez.call(year: 2021).result
  end
end
