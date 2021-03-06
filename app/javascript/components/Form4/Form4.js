import React, { useState } from "react";

const Form4 = ({ currentForm }) => {
  const [values, setValues] = useState({ ...currentForm })

  const year = new URLSearchParams(window.location.search).get('year')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/user/form4', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ form4: { ...totals, ...values, reporting_date: `${year}.01.01` } })
    })
      .then(res => res.status ? window.location = '/user' : null)
  }

  let totals = {}


  const handleChange = (e) => {
    setValues({
      ...values,
      ...totals,
      [e.target.name]: parseInt(e.target.value)
    })
  }
  totals = setTotals(values)
  return (
    <div className="container">
      <h1>Форма 4 - отчет о движении денежных средств</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Наименование</th>
              <th scope="col">КОД</th>
              <th scope="col">Значение, руб.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Движение денежных средств по текущей деятельности </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Поступило денежных средств - всего </th>
              <td>020</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c020 : 0} name='c020' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Направлено денежных средств - всего </th>
              <td>030</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c030 : 0} name='c030' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств по текущей деятельности (020 - 030)</th>
              <td>040</td>
              <td>{totals['c040'] ? totals['c040'] : 0}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Движение денежных средств по инвестиционной деятельности </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Поступило денежных средств - всего </th>
              <td>050</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c050 : 0} name='c050' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Направлено денежных средств - всего </th>
              <td>060</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c060 : 0} name='c060' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств по инвестиционной деятельности (050 - 060)</th>
              <td>070</td>
              <td>{totals['c070'] ? totals['c070'] : 0}</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Движение денежных средств по финансовой деятельности </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Поступило денежных средств - всего </th>
              <td>080</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c080 : 0} name='c080' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Направлено денежных средств - всего </th>
              <td>090</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c090 : 0} name='c090' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств по финансовой деятельности (080 - 090)</th>
              <td>100</td>
              <td>{totals['c100'] ? totals['c100'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств за отчетный период(+-40+-70+-100)</th>
              <td>110</td>
              <td>{totals['c110'] ? totals['c110'] : 0}</td>
            </tr>
            <tr>
              <th scope="row">Отстаток денежных средств и из эквивалентов на начало периода соответствующего периода</th>
              <td>120</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c120 : 0} name='c120' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Отстаток денежных средств и из эквивалентов на конец отчетного периода</th>
              <td>130</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c130 : 0} name='c130' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Влияние изменений курса инострaнной валюты по отношению к беларусскому рублю</th>
              <td>140</td>
              <td><input type="number" defaultValue={currentForm ? currentForm.c140 : 0} name='c140' onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <input className="btn btn-success" type="submit" value="Создать" />
        <hr />
      </form>
    </div>
  )
}

const setTotals = (vals) => {
  let totals = {}
  totals['c040'] = vals['c020'] - vals['c030']
  totals['c070'] = vals['c050'] - vals['c060']
  totals['c100'] = vals['c080'] - vals['c090']
  totals['c110'] = totals['c040'] + totals['c070'] + totals['c100']
  return totals
}


export default Form4
