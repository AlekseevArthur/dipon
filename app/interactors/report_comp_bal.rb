class ReportCompBal
  include Interactor

  def call
    last = Form1.find_by(reporting_date: "#{context.year.to_i - 1}.01.01").attributes
    pres = Form1.find_by(reporting_date: "#{context.year}.01.01").attributes
    section_I = %w[c110 c120 c130 c140 c150 c160 c170 c180 c190]
    section_II = %w[c210 c220 c230 c240 c250 c260 c270 c280 c290]
    section_III = %w[c410 c420 c430 c440 c450 c460 c470 c480 c490]
    section_IV = %w[c510 c520 c530 c540 c550 c560 c590]
    section_V = %w[c610 c620 c630 c640 c650 c660 c690]

    puts last['c300']
    arr = []
    arr.push(['1. Долгосрочные активы', '', '', '', '', '', '', '', ''])
    section_I.each do |code|
      arr.push(map_rows(last, pres, code, last['c300'], pres['c300']))
    end

    arr.push(['2. Краткосрочные активы', '', '', '', '', '', '', '', ''])
    section_II.each do |code|
      arr.push(map_rows(last, pres, code, last['c300'], pres['c300']))
    end

    arr.push([FORM1_NAMES[:c300],
              '300',
              last['c300'],
              100,
              pres['c300'],
              100,
              pres['c300'] - last['c300'],
              0,
              ((pres['c300'] - last['c300']).to_f / last['c300'] * 100).round(1)])

    arr.push(['3. Собственный капитал', '', '', '', '', '', '', '', ''])
    section_III.each do |code|
      arr.push(map_rows(last, pres, code, last['c300'], pres['c300']))
    end

    arr.push(['4. Досгосрочные обязательства', '', '', '', '', '', '', '', ''])
    section_IV.each do |code|
      arr.push(map_rows(last, pres, code, last['c300'], pres['c300']))
    end

    arr.push(['5. Краткосрочные обязательства', '', '', '', '', '', '', '', ''])
    section_V.each do |code|
      arr.push(map_rows(last, pres, code, last['c300'], pres['c300']))
    end

    a = last['c590'] + last['c690']
    b = pres['c590'] + pres['c690']
    p1 = (a.to_f / last['c300'] * 100).round(1)
    p2 = (b.to_f / pres['c300'] * 100).round(1)

    arr.push([
               'Заемный капитал, всего',
               '590+690',
               a,
               p1,
               b,
               p2,
               b - a,
               (p2 - p1).round(1),
               ((b - a).to_f / a * 100).round(1)
             ])

    arr.push([
               FORM1_NAMES[:c700],
               '700',
               last['c700'],
               100,
               pres['c700'],
               100,
               pres['c700'] - last['c700'],
               0,
               ((pres['c700'] - last['c700']).to_f / last['c700'] * 100).round(1)
             ])

    a = last['c490'] - last['c190']
    b = pres['c490'] - pres['c190']
    p1 = (a.to_f / last['c300'] * 100).round(1)
    p2 = (b.to_f / pres['c300'] * 100).round(1)

    arr.push([
               'Собственные оборотные средства',
               '490-190',
               a,
               p1,
               b,
               p2,
               b - a,
               (p2 - p1).round(1),
               ((b - a).to_f / a * 100).round(1)
             ])
    context.result = arr
  end

  def map_rows(first, second, key, itog1, itog2)
    new_row = []

    proc1 = (first[key] / itog1.to_f * 100).round(1)
    proc2 = (second[key] / itog2.to_f * 100).round(1)

    new_row.push(FORM1_NAMES[key.to_sym])
    new_row.push(key[1..])
    new_row.push(first[key])
    new_row.push(proc1)
    new_row.push(second[key])
    new_row.push(proc2)
    new_row.push(second[key] - first[key])
    new_row.push((proc2 - proc1).round(1))
    new_row.push(((second[key] - first[key]).to_f / first[key] * 100).round(1))
  end

  UNTOUCH_KEYS = %w[id reporting_date created_at updated_at organization_id].freeze
end
