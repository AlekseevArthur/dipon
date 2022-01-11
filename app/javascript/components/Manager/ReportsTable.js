import React, { useState } from 'react'

const ReportsTable = () => {
  const years = ['2021', '2020', '2019', '2018', '2017', '2016', '2015']

  return <div className="container">
    <table className="table table-bordered table-hover">
      <thead className="table-dark" >
        <tr>
          <th>Сравнительно-аналитический баланс</th>
          <th>Анализ финансовых результатов</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <a className="link-success" href={`/report?type=1&year=2021`}>2021</a></td>
          <td> <a className="link-success" href={`/report?type=2&year=2021`}>2021</a></td>
        </tr>
        <tr>
          <td> <a className="link-success" href={`/report?type=1&year=2020`}>2020</a></td>
          <td> <a className="link-success" href={`/report?type=2&year=2020`}>2020</a></td>
        </tr>
        <tr>
          <td> <a className="link-success" href={`/report?type=1&year=2019`}>2019</a></td>
          <td> <a className="link-success" href={`/report?type=2&year=2019`}>2019</a></td>
        </tr>
        <tr>
          <td> <a className="link-success" href={`/report?type=1&year=2018`}>2018</a></td>
          <td> <a className="link-success" href={`/report?type=2&year=2018`}>2018</a></td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default ReportsTable