class ReportFinRez
  include Interactor

  def call
    last = Form2.find_by(reporting_date: "#{context.year.to_i - 1}.01.01").attributes
    pres = Form2.find_by(reporting_date: "#{context.year}.01.01").attributes
    context.result = last.map { |k, _| map_rows(last[k], pres[k], k) }.compact
  end

  def map_rows(first, second, key)
    return if UNTOUCH_KEYS.include? key

    new_row = []
    new_row.push(FORM2_NAMES[key.to_sym])
    new_row.push(key[1..])
    new_row.push(first)
    new_row.push(second)
    new_row.push(second - first)
    new_row.push(((second - first).to_f / (first.zero? ? 1 : first) * 100).round(2))
    new_row
  end

  UNTOUCH_KEYS = %w[id reporting_date created_at updated_at organization_id].freeze
end
