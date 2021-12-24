import React, { useState } from "react";


const Form1 = () => {
  const [formValues, setValues] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello wolrd')
  }

  const handleChange = (e) => {
    console.log(formValues)
    setValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

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
              <td><input type="text" name='110' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Нематериальные активы</th>
              <td>120</td>
              <td><input type="text" name='120' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходные вложения в материальные ценности</th>
              <td>130</td>
              <td><input type="text" name='130' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Вложения в долгосрочные активы </th>
              <td>140</td>
              <td><input type="text" name='140' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные финансовые вложения</th>
              <td>150</td>
              <td><input type="text" name='150' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Отложенные налоговые активы</th>
              <td>160</td>
              <td><input type="text" name='160' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочная дебиторская задолженность</th>
              <td>170</td>
              <td><input type="text" name='170' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие долгосрочные активы</th>
              <td>180</td>
              <td><input type="text" name='180' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу I</th>
              <td>190</td>
              <td></td>
            </tr>

            <tr className="table-primary">
              <th scope="row">II. КРАТКОСРОЧНЫЕ АКТИВЫ </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Запасы и затраты</th>
              <td>210</td>
              <td><input type="text" name='210' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные активы, предназначенные для реализации</th>
              <td>220</td>
              <td><input type="text" name='220' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы будущих периодов </th>
              <td>230</td>
              <td><input type="text" name='230' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Налог на добавленную стоимость по приобретенным товарам, работам, услугам </th>
              <td>240</td>
              <td><input type="text" name='240' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочная дебиторская задолженность </th>
              <td>250</td>
              <td><input type="text" name='250' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочные финансовые вложения </th>
              <td>260</td>
              <td><input type="text" name='260' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Денежные средства и их эквиваленты</th>
              <td>270</td>
              <td><input type="text" name='270' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие краткосрочные активы </th>
              <td>280</td>
              <td><input type="text" name='280' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу II </th>
              <td>290</td>
              <td></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">БАЛАНС (190+290) </th>
              <td>300</td>
              <td></td>
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
              <td><input type="text" name='410' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Неоплаченная часть уставного капитала</th>
              <td>420</td>
              <td><input type="text" name='420' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Собственные акции (доли в уставном капитале)</th>
              <td>430</td>
              <td><input type="text" name='430' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Резервный капитал</th>
              <td>440</td>
              <td><input type="text" name='440' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Добавочный капитал</th>
              <td>450</td>
              <td><input type="text" name='450' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Нераспределенная прибыль (непокрытый убыток) </th>
              <td>460</td>
              <td><input type="text" name='460' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Чистая прибыль (убыток) отчетного периода </th>
              <td>470</td>
              <td><input type="text" name='470' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Целевое финансирование </th>
              <td>480</td>
              <td><input type="text" name='480' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу III</th>
              <td>490</td>
              <td></td>
            </tr>

            <tr className="table-primary">
              <th scope="row">IV. ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные кредиты и займы</th>
              <td>510</td>
              <td><input type="text" name='510' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Долгосрочные обязательства по лизинговым платежам</th>
              <td>520</td>
              <td><input type="text" name='520' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Отложенные налоговые обязательства</th>
              <td>530</td>
              <td><input type="text" name='530' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы будущих периодов </th>
              <td>540</td>
              <td><input type="text" name='540' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Резервы предстоящих платежей</th>
              <td>550</td>
              <td><input type="text" name='550' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие долгосрочные обязательства</th>
              <td>560</td>
              <td><input type="text" name='560' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу IV</th>
              <td>590</td>
              <td></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">V. КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочные кредиты и займы</th>
              <td>610</td>
              <td><input type="text" name='610' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочная часть долгосрочных обязательств</th>
              <td>620</td>
              <td><input type="text" name='620' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Краткосрочная кредиторская задолженность</th>
              <td>630</td>
              <td><input type="text" name='630' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Обязательства, предназначенные для реализации</th>
              <td>640</td>
              <td><input type="text" name='640' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы будущих периодов </th>
              <td>650</td>
              <td><input type="text" name='650' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Резервы предстоящих расходов</th>
              <td>660</td>
              <td><input type="text" name='660' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие краткосрочные обязательства </th>
              <td>670</td>
              <td><input type="text" name='670' onChange={handleChange} /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">ИТОГО по разделу V</th>
              <td>690</td>
              <td></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">БАЛАНС (сумма строк 490 + 590 + 690)</th>
              <td>700</td>
              <td></td>
            </tr>
            <tr><td/><td/><td/></tr>
            
          </tbody>

        </table>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form1