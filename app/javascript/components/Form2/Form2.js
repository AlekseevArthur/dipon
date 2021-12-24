import React, { useState } from "react";

const Form2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/form2s', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ form2: values })
    })
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      ...dinamicValues,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const [values, setValues] = useState({})

  const dinamicValues = {}

  const setDinValues = () => {
    dinamicValues['c030'] = values['c010'] - values['c020']
    dinamicValues['c060'] = values['c030'] - values['c040'] - values['c050']
    dinamicValues['c090'] = values['c060'] + values['c070'] - values['c080']
    dinamicValues['c140'] = values['c100'] - values['c110'] + values['c120'] - values['c130']
    dinamicValues['c150'] = values['c090'] + values['c140']
    dinamicValues['c210'] = values['c150'] - values['c160'] +
      + values['c170'] - values['c180'] - values['c190'] - values['c200'] + values['c205']
    dinamicValues['c240'] = values['c210'] + values['c220'] + values['c230']
  }

  setDinValues()

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Показатель</th>
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
            <tr>
              <th scope="row">Выручка от реализации продукции, товаров, работ, услуг </th>
              <td>010</td>
              <td><input type="number" name='c010' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Себестоимость реализованной продукции, товаров, работ, услуг </th>
              <td>020</td>
              <td><input type="number" name='c020' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Валовая прибыль (010-020) </th>
              <td>030</td>
              <td>{dinamicValues['c030'] ? dinamicValues['c030'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Управленческие расходы</th>
              <td>040</td>
              <td><input type="number" name='c040' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы на реализацию</th>
              <td>050</td>
              <td><input type="number" name='c050' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от реализации продукции, товаров, работ, услуг (030-040-050)</th>
              <td>060</td>
              <td>{dinamicValues['c060'] ? dinamicValues['c060'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Прочие доходы по текущей деятельности</th>
              <td>070</td>
              <td><input type="number" name='c070' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие расходы по текущей деятельности</th>
              <td>080</td>
              <td><input type="number" name='c080' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от текущей деятельности (±060+070-080)</th>
              <td>090</td>
              <td>{dinamicValues['c090'] ? dinamicValues['c090'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Доходы по инвестиционной деятельности</th>
              <td>100</td>
              <td><input type="number" name='c100' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы по инвестиционной деятельности</th>
              <td>110</td>
              <td><input type="number" name='c110' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы по финансовой деятельности</th>
              <td>120</td>
              <td><input type="number" name='c120' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы по финансовой деятельности </th>
              <td>130</td>
              <td><input type="number" name='c130' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от инвестиционной и финансовой деятельности (100–110+120–130) </th>
              <td>140</td>
              <td>{dinamicValues['c140'] ? dinamicValues['c140'] : 0}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) до налогообложения (±090±140) </th>
              <td>150</td>
              <td>{dinamicValues['c150'] ? dinamicValues['c150'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Налог на прибыль </th>
              <td>160</td>
              <td><input type="number" name='c160' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Изменение отложенных налоговых активов</th>
              <td>170</td>
              <td><input type="number" name='c170' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Изменение отложенных налоговых обязательств</th>
              <td>180</td>
              <td><input type="number" name='c180' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие налоги и сборы, исчисляемые из прибыли (дохода)</th>
              <td>190</td>
              <td><input type="number" name='c190' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие платежи, исчисляемые из прибыли (дохода)</th>
              <td>200</td>
              <td><input type="number" name='c200' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прибыль (убыток), перераспределяемые в пределах юридического лица</th>
              <td>205</td>
              <td><input type="number" name='c205' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Чистая прибыль (убыток) (±150–160±170±180–190–200±205) </th>
              <td>210</td>
              <td>{dinamicValues['c210'] ? dinamicValues['c210'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Результат от переоценки долгосрочных активов, не включаемый в чистую прибыль (убыток)</th>
              <td>220</td>
              <td><input type="number" name='c220' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат от прочих операций, не включаемый в чистую прибыль (убыток)</th>
              <td>230</td>
              <td><input type="number" name='c230' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Совокупная прибыль (убыток) (±210±220±230) </th>
              <td>240</td>
              <td>{dinamicValues['c240'] ? dinamicValues['c240'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Базовая прибыль (убыток) на акцию </th>
              <td>250</td>
              <td><input type="number" name='c250' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Разводненная прибыль (убыток) на акцию</th>
              <td>260</td>
              <td><input type="number" name='c260' onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <input name='date' type='date' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default Form2