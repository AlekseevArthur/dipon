import React, { useState } from "react";

const Form4 = props => {
  const [values, setValues] = useState({})

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

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Наименование</th>
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
              <th scope="row">Движение денежных средств по текущей деятельности </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Поступило денежных средств - всего </th>
              <td>020</td>
              <td><input type="number" name='c020' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Направлено денежных средств - всего </th>
              <td>030</td>
              <td><input type="number" name='c030' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств по текущей деятельности (020 - 030)</th>
              <td>040</td>
              <td></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Движение денежных средств по инвестиционной деятельности </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Поступило денежных средств - всего </th>
              <td>050</td>
              <td><input type="number" name='c050' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Направлено денежных средств - всего </th>
              <td>060</td>
              <td><input type="number" name='c060' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств по инвестиционной деятельности (050 - 060)</th>
              <td>070</td>
              <td></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Движение денежных средств по финансовой деятельности </th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Поступило денежных средств - всего </th>
              <td>080</td>
              <td><input type="number" name='c080' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Направлено денежных средств - всего </th>
              <td>090</td>
              <td><input type="number" name='c090' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат движения денежных средств по финансовой деятельности (080 - 090)</th>
              <td>100</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Form4
