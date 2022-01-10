import React from 'react'

const Table3 = ({ data }) => {

    let krit1 = Math.round((data[3][2] + data[4][2]) / (Math.round((data[2][2] / data[0][2]) * 100) / 100))
    let krit2 = Math.round((data[3][3] + data[4][3]) / (Math.round((data[2][3] / data[0][3]) * 100) / 100))

    let zpf1 = Math.round(((data[0][2] - krit1) / data[0][2]) * 10000) / 100
    let zpf2 = Math.round(((data[0][3] - krit2) / data[0][3]) * 10000) / 100

    let prib1 = data[2][2] - data[3][2] - data[4][2]
    let prib2 = data[2][3] - data[3][3] - data[4][3]
    return (
        <div className='container'>
            <table className="table table-bordered table-hover " >
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Показатели</th>
                        <th scope="col">за 2020</th>
                        <th scope="col">за 2021</th>
                        <th scope="col">Изменение (+-), тыс. руб.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1. Объем продаж</td>
                        <td>{data[0][2]}</td>
                        <td>{data[0][3]}</td>
                        <td>{data[0][4]}</td>
                    </tr>
                    <tr>
                        <td>2. Себестоимость продаж - переменные затраты</td>
                        <td>{data[1][2]}</td>
                        <td>{data[1][3]}</td>
                        <td>{data[1][4]}</td>
                    </tr>
                    <tr>
                        <td>3. Маржинальный доход</td>
                        <td>{data[2][2]}</td>
                        <td>{data[2][3]}</td>
                        <td>{data[2][4]}</td>
                    </tr>
                    <tr>
                        <td>4. Доля маржинального дохода в объеме продаж</td>
                        <td>{Math.round((data[2][2] / data[0][2]) * 100) / 100}</td>
                        <td>{Math.round((data[2][3] / data[0][3]) * 100) / 100}</td>
                        <td>{Math.round(((Math.round((data[2][3] / data[0][3]) * 100) / 100)
                            - (Math.round((data[2][2] / data[0][2]) * 100) / 100)) * 100) / 100}</td>
                    </tr>
                    <tr>
                        <td>5. Постоянные затраты</td>
                        <td>{data[3][2] + data[4][2]}</td>
                        <td>{data[3][3] + data[4][3]}</td>
                        <td>{data[3][3] + data[4][3] - (data[3][2] + data[4][2])}</td>
                    </tr>
                    <tr>
                        <td>6. Критическая точка объема продаж</td>
                        <td>{krit1}</td>
                        <td>{krit2}</td>
                        <td>{krit2 - krit1}</td>
                    </tr>
                    <tr>
                        <td>7. Запас финансовой прочности (ЗФП)</td>
                        <td>{data[0][2] - krit1}</td>
                        <td>{data[0][3] - krit2}</td>
                        <td>{(data[0][3] - krit2) - (data[0][2] - krit1)}</td>
                    </tr>
                    <tr>
                        <td>8. ЗФП в % к объему продаж</td>
                        <td>{zpf1}</td>
                        <td>{zpf2}</td>
                        <td>{Math.round((zpf2 - zpf1) * 100) / 100}</td>
                    </tr>
                    <tr>
                        <td>9. Прибыль от продаж</td>
                        <td>{prib1}</td>
                        <td>{prib2}</td>
                        <td>{prib2 - prib1}</td>
                    </tr>
                </tbody>
            </table>
            <div className="card">
                <div className={`card-body bg-info`}>
                    {`
            Как показывает расчет, в прошлом году нужно было реализовать продукции на сумму ${krit1} руб., чтобы покрыть все затраты. 
            При такой выручке рентабельность равна нулю. Фактически выручка составила ${data[0][2]} руб., что выше пороговой на ${data[0][2] - krit1} руб.
            или на ${zpf1}%. Это и есть запас финансовой прочности или зона безубыточности предприятия. В отчетном году существует запас финансовой устойчивости.
            Выручка может уменьшится еще на ${zpf2}% и только тогда рентабельность будет равна нулю
                    
                    `}
                </div>
            </div>

        </div>
    )
}




export default Table3