import React, { useState } from "react";


const Form1 = (props) => {
  const [values, setValues] = useState({})

  const year = new URLSearchParams(window.location.search).get('year')

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      ...totals
    })
    fetch(`/user/form1`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ form1: { ...values, ...totals, reporting_date: `${year}.01.01` } })
    })
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      ...totals,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const totals = {}

  const setTotals = () => {
    totals['c190'] = values['c110'] + values['c120']
      + values['c130'] + values['c140'] + values['c150']
      + values['c160'] + values['c170'] + values['c180']
    totals['c290'] = values['c210'] + values['c220']
      + values['c230'] + values['c240'] + values['c250']
      + values['c260'] + values['c270'] + values['c280']
    totals['c300'] = values['c190'] + values['c290']
    totals['c490'] = values['c410'] + values['c420']
      + values['c430'] + values['c440'] + values['c450']
      + values['c460'] + values['c470'] + values['c480']
    totals['c590'] = values['c510'] + values['c520']
      + values['c530'] + values['c540'] + values['c550'] + values['c560']
    totals['c690'] = values['c610'] + values['c620'] + values['c630']
      + values['c640'] + values['c650'] + values['c660'] + values['c670']
    totals['c700'] = totals['c490'] + totals['c590'] + totals['c690']
  }

  setTotals()
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">АКТИВ</th>
              <th scope="col">КОД</th>
              <th scope="col">Значение, тыс. руб.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">I. ДОЛГОСРОЧНЫЕ АКТИВЫ</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Основные средства</th>
              <td>110</td>
              <td><input type="number" name='c110' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Нематериальные активы</th>
              <td>120</td>
              <td><input type="number" name='c120' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходные вложения в материальные ценности</th>
              <td>130</td>
              <td><input type="number" name='c130' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Вложения в долгосрочные активы </th>
              <td>140</td>
              <td><input type="number" name='c140' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные финансовые вложения</th>
              <td>150</td>
              <td><input type="number" name='c150' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Отложенные налоговые активы</th>
              <td>160</td>
              <td><input type="number" name='c160' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочная дебиторская задолженность</th>
              <td>170</td>
              <td><input type="number" name='c170' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие долгосрочные активы</th>
              <td>180</td>
              <td><input type="number" name='c180' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу I</th>
              <td>190</td>
              <td>{totals['c190'] ? totals['c190'] : ''}</td>
            </tr>

            <tr className="table-primary">
              <th scope="row">II. КРАТКОСРОЧНЫЕ АКТИВЫ </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Запасы и затраты</th>
              <td>210</td>
              <td><input type="number" name='c210' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные активы, предназначенные для реализации</th>
              <td>220</td>
              <td><input type="number" name='c220' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы будущих периодов </th>
              <td>230</td>
              <td><input type="number" name='c230' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Налог на добавленную стоимость по приобретенным товарам, работам, услугам </th>
              <td>240</td>
              <td><input type="number" name='c240' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочная дебиторская задолженность </th>
              <td>250</td>
              <td><input type="number" name='c250' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочные финансовые вложения </th>
              <td>260</td>
              <td><input type="number" name='c260' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Денежные средства и их эквиваленты</th>
              <td>270</td>
              <td><input type="number" name='c270' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие краткосрочные активы </th>
              <td>280</td>
              <td><input type="number" name='c280' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу II </th>
              <td>290</td>
              <td>{totals['c290'] ? totals['c290'] : ''}</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">БАЛАНС (190+290) </th>
              <td>300</td>
              <td>{totals['c300'] ? totals['c300'] : ''}</td>
            </tr>
          </tbody>
          <thead className="thead-dark">
            <tr>
              <th scope="col">ПАССИВ</th>
              <th scope="col">КОД</th>
              <th scope="col">Значение, тыс. руб.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">III. СОБСТВЕННЫЙ КАПИТАЛ</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Уставный капитал </th>
              <td>410</td>
              <td><input type="number" name='c410' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Неоплаченная часть уставного капитала</th>
              <td>420</td>
              <td><input type="number" name='c420' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Собственные акции (доли в уставном капитале)</th>
              <td>430</td>
              <td><input type="number" name='c430' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Резервный капитал</th>
              <td>440</td>
              <td><input type="number" name='c440' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Добавочный капитал</th>
              <td>450</td>
              <td><input type="number" name='c450' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Нераспределенная прибыль (непокрытый убыток) </th>
              <td>460</td>
              <td><input type="number" name='c460' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Чистая прибыль (убыток) отчетного периода </th>
              <td>470</td>
              <td><input type="number" name='c470' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Целевое финансирование </th>
              <td>480</td>
              <td><input type="number" name='c480' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу III</th>
              <td>490</td>
              <td>{totals['c490'] ? totals['c490'] : ''}</td>
            </tr>

            <tr className="table-primary">
              <th scope="row">IV. ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные кредиты и займы</th>
              <td>510</td>
              <td><input type="number" name='c510' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные обязательства по лизинговым платежам</th>
              <td>520</td>
              <td><input type="number" name='c520' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Отложенные налоговые обязательства</th>
              <td>530</td>
              <td><input type="number" name='c530' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы будущих периодов </th>
              <td>540</td>
              <td><input type="number" name='c540' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Резервы предстоящих платежей</th>
              <td>550</td>
              <td><input type="number" name='c550' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие долгосрочные обязательства</th>
              <td>560</td>
              <td><input type="number" name='c560' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу IV</th>
              <td>590</td>
              <td>{totals['c590'] ? totals['c590'] : ''}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">V. КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочные кредиты и займы</th>
              <td>610</td>
              <td><input type="number" name='c610' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочная часть долгосрочных обязательств</th>
              <td>620</td>
              <td><input type="number" name='c620' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочная кредиторская задолженность</th>
              <td>630</td>
              <td><input type="number" name='c630' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Обязательства, предназначенные для реализации</th>
              <td>640</td>
              <td><input type="number" name='c640' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы будущих периодов </th>
              <td>650</td>
              <td><input type="number" name='c650' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Резервы предстоящих расходов</th>
              <td>660</td>
              <td><input type="number" name='c660' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие краткосрочные обязательства </th>
              <td>670</td>
              <td><input type="number" name='c670' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу V</th>
              <td>690</td>
              <td>{totals['c690'] ? totals['c690'] : ''}</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">БАЛАНС (сумма строк 490 + 590 + 690)</th>
              <td>700</td>
              <td>{totals['c700'] ? totals['c700'] : ''}</td>
            </tr>
            <tr><td /><td /><td /></tr>

          </tbody>

        </table>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form1