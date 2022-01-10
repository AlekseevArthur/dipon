import React from 'react'

const Table2 = ({ data }) => {
  let sal1 = data[13][2] + data[6][2] - data[7][2]
  let sal2 = data[13][3] + data[6][3] - data[7][3]

  let nals1 = data[15][2] + data[19][2]
  let nals2 = data[15][3] + data[19][3]

  let udves1 = Math.round(data[5][2] / (data[5][2] + sal1) * 10000) / 100
  let udves2 = Math.round(data[5][3] / (data[5][3] + sal2) * 10000) / 100

  let udves3 = Math.round(sal1 / (data[5][2] + sal1) * 10000) / 100
  let udves4 = Math.round(sal2 / (data[5][3] + sal2) * 10000) / 100

  let udves5 = Math.round(nals1 / data[14][2] * 10000) / 100
  let udves6 = Math.round(nals2 / data[14][3] * 10000) / 100

  let udves7 = 100 - udves5
  let udves8 = 100 - udves6
  return (
    <div className='container'>
      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col" rowSpan='2'>Наименование показателя</th>
            <th scope="col" colSpan='2'>2021</th>
            <th scope="col" colSpan='2'>2222</th>
            <th scope="col" rowSpan='2'>Изменение +-</th>
          </tr>
          <tr>
            <th>руб</th>
            <th>уд. вес %</th>
            <th>руб.</th>
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
          </tr>
          <tr>
            <td>1. Прибыль (убыток) от продаж</td>
            <td>{data[5][2]}</td>
            <td>{udves1}</td>
            <td>{data[5][3]}</td>
            <td>{udves2}</td>
            <td>{data[5][4]}</td>
          </tr>
          <tr>
            <td>2. Сальдо прочих доходов и расходов</td>
            <td>{sal1}</td>
            <td>{udves3}</td>
            <td>{sal2}</td>
            <td>{udves4}</td>
            <td>{sal2 - sal1}</td>
          </tr>
          <tr>
            <td>3. Прибыль (убыток) до налогообложения</td>
            <td>{data[14][2]}</td>
            <td>100</td>
            <td>{data[14][3]}</td>
            <td>100</td>
            <td>{data[14][4]}</td>
          </tr>
          <tr>
            <td>4. Налоги и прочите платежи из прибыли</td>
            <td>{nals1}</td>
            <td>{udves5}</td>
            <td>{nals2}</td>
            <td>{udves6}</td>
            <td>{nals2 - nals1}</td>
          </tr>
          <tr>
            <td>5. Чистая прибыль (убыток) отчетного периода</td>
            <td>{data[21][2]}</td>
            <td>{udves7}</td>
            <td>{data[21][3]}</td>
            <td>{udves8}</td>
            <td>{data[21][4]}</td>
          </tr>
        </tbody>
      </table>
      <div className="card">
        <div className={`card-body bg-info`}>
          {`В составе общей бухгалтерской прибыли сумма налогов из прибыли занимает в 
          отчетном периоде ${udves6}%, что ниже установленной законодательством ставки налога на
          прибыль. Таким образом, систему налогового планирования на предприятии можно считать 
          достаточно эффективной.
          `}
        </div>
      </div>
    </div>
  )
}

export default Table2
