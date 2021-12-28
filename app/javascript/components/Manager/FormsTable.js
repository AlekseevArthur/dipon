import React, { useState } from 'react'

const FormsTable = () => {
  const [state, setState] = useState({ forms: [], loading: true })

  const getFormsStatus = () => {
    fetch('/dashboard.json')
      .then(res => res.json())
      .then(data => setState({ forms: data, loading: false }))
  }
  state.loading ? getFormsStatus() : null
  console.log(state)
  return (<div>
    <table className="table table-bordered table-hover">
      <thead className="thead-dark" >
        <tr>
          <th>Год</th>
          <th>Форма 1</th>
          <th>Форма 2</th>
          <th>Форма 3</th>
          <th>Форма 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2021</td>
          <td>{state.forms.indexOf('2021-01-01') + 1 ? 'edit' : 'create'}</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>{state.forms.indexOf('2020.01.01') + 1 ? 'edit' : 'create'}</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
        </tr>
      </tbody>
    </table>
  </div>)
}

export default FormsTable

