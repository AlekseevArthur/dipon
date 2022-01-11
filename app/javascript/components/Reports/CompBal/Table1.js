import React from 'react'

const Table1 = ({ data }) => {
    return <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
            <tr>
                <th scope="col" rowSpan='2'>Наименование показателя</th>
                <th scope="col" rowSpan='2'>Код строк</th>
                <th scope="col" colSpan='2'>2021</th>
                <th scope="col" colSpan='2'>2222</th>
                <th scope="col" colSpan='2'>Отклонение +-</th>
                <th scope="col" rowSpan='2'>Темп прироста</th>
            </tr>
            <tr>
                <th>тыс руб</th>
                <th>% к итогу</th>
                <th>тыс руб</th>
                <th>% к итогу</th>
                <th>тыс руб</th>
                <th>% к итогу</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, k) => <Table1Row key={k} data={row} ind={k} />)}
        </tbody>
    </table>
}

const Table1Row = ({ data, ind }) => {
    let headerRows = [0, 10, 21, 31, 39, 47]
    let color = headerRows.indexOf(ind) + 1 ? 'table-primary' : ''
    color = (data[1] === '700' || data[1] === '300') ? 'table-info' : color
    color = (data[1] === '590+690' || data[1] === '490-190') ? 'table-info' : color
    return (
        <tr className={color}>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{data[3]}</td>
            <td>{data[4]}</td>
            <td>{data[5]}</td>
            <td>{data[6]}</td>
            <td>{data[7]}</td>
            <td>{data[8]}</td>
        </tr>
    )
}


export default Table1