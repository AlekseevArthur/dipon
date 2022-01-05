import React from 'react'

const Table2 = () => {
  return (
    <table className="table table-bordered table-hover table-striped">
      <thead className="table-dark">
        <tr>
          <th scope="col" rowSpan='2'>Наименование показателя</th>
          <th scope="col" colSpan='2'>2021</th>
          <th scope="col" colSpan='2'>2222</th>
          <th scope="col" colSpan='2'>Изменение +-</th>
        </tr>
        <tr>
          <th>тыс руб</th>
          <th>уд. вес %</th>
          <th>тыс. руб.</th>
          <th>уд. вес %</th>
          <th>тыс. руб.</th>
          <th>уд. вес %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table2
