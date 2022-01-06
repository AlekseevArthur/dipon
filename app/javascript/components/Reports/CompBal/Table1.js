import React from 'react'

const Table1 = () => {
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
    </table>
}

export default Table1