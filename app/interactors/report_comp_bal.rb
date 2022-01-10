class ReportCompBal
  include Interactor

  def call
    last = Form1.find_by(reporting_date: "#{context.year.to_i - 1}.01.01").attributes
    pres = Form1.find_by(reporting_date: "#{context.year}.01.01").attributes
    section_I = %w[c110 c120 c130 c140 c150 c160 c170 c180 c190]
    # section_II = %w[c210 c220 c230 c240 c250 c260 c270 c280 c290]
    # section_III = %w[c410 c420 c430 c440 c450 c460 c470 c480 c490]
    # section_IV = %w[c510 c520 c530 c540 c550 c560 c590]
    # section_V = %w[c610 c620 c630 c640 c650 c660 c690]

    puts last['c300']
    arr = []
    arr.push(['1. Долгосрочные активы', '', '', '', '', '', '', '', ''])
    section_I.each do |code|
      arr.push(map_rows(last, pres, code, last['c300'], pres['c300']))
    end
    context.result = arr
  end

  def map_rows(first, second, key, itog1, itog2)
    new_row = []

    proc1 = (first[key] / itog1.to_f * 100).round(1)
    proc2 = (second[key] / itog2.to_f * 100).round(1)

    new_row.push(FORM1_NAMES[key.to_sym])
    new_row.push(first[key])
    new_row.push(proc1)
    new_row.push(second[key])
    new_row.push(proc2)
    new_row.push(second[key] - first[key])
    new_row.push((proc2 - proc1).round(1))
  end

  UNTOUCH_KEYS = %w[id reporting_date created_at updated_at organization_id].freeze
end
