import React, { useState } from "react";
import Form2q from "./Form2q";


const Form2Full = ({ lastForm, currentForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/user/form2', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        form2: { ...valuesS, ...dinValS, reporting_date: `${year}.01.01` }
      })
    })
      .then(res => res.status ? window.location = '/user' : null)
  }

  const year = new URLSearchParams(window.location.search).get('year')

  const handleChangeS = (e) => {
    setvaluesS({
      ...valuesS,
      ...dinValS,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const [valuesS, setvaluesS] = useState({ ...currentForm })

  let dinValS = setDinValuesF(valuesS)
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Показатель</th>
              <th scope="col">КОД</th>
              <th scope="col">{'01.01.' + year}</th>
              <th scope="col">{'01.01.' + (parseInt(year) + 1)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row">Выручка от реализации продукции, товаров, работ, услуг </th>
              <td>010</td>
              <td>{lastForm.c010}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c010 : 0} name='c010' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Себестоимость реализованной продукции, товаров, работ, услуг </th>
              <td>020</td>
              <td>{lastForm.c020}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c020 : 0} name='c020' onChange={handleChangeS} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Валовая прибыль (010-020) </th>
              <td>030</td>
              <td>{lastForm.c030}</td>
              <td>{dinValS['c030'] ? dinValS['c030'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Управленческие расходы</th>
              <td>040</td>
              <td>{lastForm.c040}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c040 : 0} name='c040' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы на реализацию</th>
              <td>050</td>
              <td>{lastForm.c050}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c050 : 0} name='c050' onChange={handleChangeS} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от реализации продукции, товаров, работ, услуг (030-040-050)</th>
              <td>060</td>
              <td>{lastForm.c060}</td>
              <td>{dinValS['c060'] ? dinValS['c060'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Прочие доходы по текущей деятельности</th>
              <td>070</td>
              <td>{lastForm.c070}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c070 : 0} name='c070' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие расходы по текущей деятельности</th>
              <td>080</td>
              <td>{lastForm.c080}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c080 : 0} name='c080' onChange={handleChangeS} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от текущей деятельности (±060+070-080)</th>
              <td>090</td>
              <td>{lastForm.c090}</td>
              <td>{dinValS['c090'] ? dinValS['c090'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Доходы по инвестиционной деятельности</th>
              <td>100</td>
              <td>{lastForm.c100}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c100 : 0} name='c100' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы по инвестиционной деятельности</th>
              <td>110</td>
              <td>{lastForm.c110}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c110 : 0} name='c110' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы по финансовой деятельности</th>
              <td>120</td>
              <td>{lastForm.c120}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c120 : 0} name='c120' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы по финансовой деятельности </th>
              <td>130</td>
              <td>{lastForm.c130}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c130 : 0} name='c130' onChange={handleChangeS} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от инвестиционной и финансовой деятельности (100–110+120–130) </th>
              <td>140</td>
              <td>{lastForm.c140}</td>
              <td>{dinValS['c140'] ? dinValS['c140'] : 0}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) до налогообложения (±090±140) </th>
              <td>150</td>
              <td>{lastForm.c150}</td>
              <td>{dinValS['c150'] ? dinValS['c150'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Налог на прибыль </th>
              <td>160</td>
              <td>{lastForm.c160}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c160 : 0} name='c160' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Изменение отложенных налоговых активов</th>
              <td>170</td>
              <td>{lastForm.c170}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c170 : 0} name='c170' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Изменение отложенных налоговых обязательств</th>
              <td>180</td>
              <td>{lastForm.c180}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c180 : 0} name='c180' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие налоги и сборы, исчисляемые из прибыли (дохода)</th>
              <td>190</td>
              <td>{lastForm.c190}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c190 : 0} name='c190' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие платежи, исчисляемые из прибыли (дохода)</th>
              <td>200</td>
              <td>{lastForm.c200}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c200 : 0} name='c200' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Прибыль (убыток), перераспределяемые в пределах юридического лица</th>
              <td>205</td>
              <td>{lastForm.c205}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c205 : 0} name='c205' onChange={handleChangeS} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Чистая прибыль (убыток) (±150–160±170±180–190–200±205) </th>
              <td>210</td>
              <td>{lastForm.c210}</td>
              <td>{dinValS['c210'] ? dinValS['c210'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Результат от переоценки долгосрочных активов, не включаемый в чистую прибыль (убыток)</th>
              <td>220</td>
              <td>{lastForm.c220}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c220 : 0} name='c220' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Результат от прочих операций, не включаемый в чистую прибыль (убыток)</th>
              <td>230</td>
              <td>{lastForm.c230}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c230 : 0} name='c230' onChange={handleChangeS} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Совокупная прибыль (убыток) (±210±220±230) </th>
              <td>240</td>
              <td>{lastForm.c240}</td>
              <td>{dinValS['c240'] ? dinValS['c240'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Базовая прибыль (убыток) на акцию </th>
              <td>250</td>
              <td>{lastForm.c250}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c250 : 0} name='c250' onChange={handleChangeS} /></td>
            </tr>
            <tr>
              <th scope="row">Разводненная прибыль (убыток) на акцию</th>
              <td>260</td>
              <td>{lastForm.c260}</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c260 : 0} name='c260' onChange={handleChangeS} /></td>
            </tr>
          </tbody>
        </table>
        <input className="btn btn-success" type="submit" value="Сохранить" />
        <hr />
      </form>
    </div>
  )
}

const setDinValuesF = (vals) => {
  let dinVal = {}
  dinVal['c030'] = vals['c010'] - vals['c020']
  dinVal['c060'] = vals['c030'] - vals['c040'] - vals['c050']
  dinVal['c090'] = vals['c060'] + vals['c070'] - vals['c080']
  dinVal['c140'] = vals['c100'] - vals['c110'] + vals['c120'] - vals['c130']
  dinVal['c150'] = vals['c090'] + vals['c140']
  dinVal['c210'] = vals['c150'] - vals['c160'] +
    + vals['c170'] - vals['c180'] - vals['c190'] - vals['c200'] + vals['c205']
  dinVal['c240'] = vals['c210'] + vals['c220'] + vals['c230']
  return dinVal
}

const Form2 = ({ lastForm, currentForm }) => {
  return lastForm ? <Form2Full currentForm={currentForm} lastForm={lastForm} /> : <Form2q currentForm={currentForm} />
}

export default Form2