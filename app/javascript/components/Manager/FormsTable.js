import React, { useState } from 'react'

const FormsTable = () => {
  const [state, setState] = useState({ forms1: [], forms2: [], forms4: [], loading: true })

  const years = ['2021', '2020', '2019', '2018', '2017', '2016']

  const getFormsStatus = () => {
    fetch('/dashboard.json')
      .then(res => res.json())
      .then(data => setState({ ...data, loading: false }))
  }
  state.loading ? getFormsStatus() : null

  return (
    <div className='container'>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark" >
          <tr>
            <th>Год</th>
            <th>Форма 1</th>
            <th>Форма 2</th>
            <th>Форма 4</th>
          </tr>
        </thead>
        <tbody>
          {years.map((year, key) => <YearRow
            key={key}
            year={year}
            forms1={state.forms1}
            forms2={state.forms2}
            forms4={state.forms4} />)}
        </tbody>
      </table>
    </div>)
}

const EditLink = ({ year, form }) => {
  return (
    <td className="table-info">
      <a className="link-dark"
        href={`/user/${form}/new/?year=${year}`}>Изменить</a>
    </td>)
}

function CreateLink({ year, form }) {
  return <td className="table-warning">
    <a className="link-success"
      href={`/user/${form}/new/?year=${year}`}>Создать</a>
  </td>
}

const YearRow = ({ year, forms1, forms2, forms4 }) => {
  return <tr>
    <td>{year}</td>
    <YearCell year={year} forms={forms1} form='form1' />
    <YearCell year={year} forms={forms2} form='form2' />
    <YearCell year={year} forms={forms4} form='form4' />
  </tr>
}

const YearCell = ({ year, forms, form }) => {
  return forms.find(x => x.year === `${year}-01-01`)
    ? <EditLink year={year} form={form} />
    : <CreateLink year={year} form={form} />
}

export default FormsTable

