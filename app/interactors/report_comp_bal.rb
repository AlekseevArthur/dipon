class ReportCompBal
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

    section_I = ['c110','c120','c130','c140','c150','c160','c170','c180','1c90']
    section_II = ['c210','c220','c230','c240','c250','c260','c270','c280','c290']
    section_III = ['c410','c420','c430','c440','c450','c460','c470','c480','c490']
    section_IV = ['c510','c520','c530','c540','c550','c560','c590']
    section_V = ['c610','c620','c630','c640','c650','c660','c690']

    UNTOUCH_KEYS = %w[id reporting_date created_at updated_at organization_id].freeze
end