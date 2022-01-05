import React from 'react'

const Table1 = ({ data }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">Показатель</th>
          <th scope="col">КОД</th>
          <th scope="col">за 2020</th>
          <th scope="col">за 2021</th>
          <th scope="col">Изменение (+-), тыс. руб.</th>
          <th scope="col">Темп прироста %</th>
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
        </tr>
        {data.map((row, k) => <Table1Row key={k} data={row} />)}
      </tbody>
    </table>
  )
}


const Table1Row = ({ data }) => {
  return (
    <tr>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
      <td>{data[2]}</td>
      <td>{data[3]}</td>
      <td>{data[4]}</td>
      <td>{data[5]}</td>
    </tr>
  )
}

export default Table1
