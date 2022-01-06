class ReportsController < ApplicationController
  def show
    @result = ReportFinRez.call(year: 2020).result
  end
end
