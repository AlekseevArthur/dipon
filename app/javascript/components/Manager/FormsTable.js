import React, { UseState } from 'react'

const FormsTable = () => {

  const getFormsStatus = () => {
    fetch('/dashboard/')
      .then()
  }

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
          <td>link</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
        </tr>
        <tr>
          <td>2019</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
          <td>link</td>
        </tr>
      </tbody>
    </table>
  </div>)
}

export default FormsTable

