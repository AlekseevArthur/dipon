import React from "react";
import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from "./Table3";
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from "victory";

const FinRez = ({ data }) => {
  return (
    <div className='container'>
      <h1>Анализ финансовых результатов</h1>
      <p>Одним их показателей, на основе которого дается обобщающая оценка финансового состояния организации, является прибыль.</p>
      <p>Анализ формирования финансовых результатов проводится как в самой организации – для целей управления активами, так и внешними пользователями информации, партнерами по бизнесу или акционерами.</p>
      <h3>Динамика факторов формирования результатов деятельности</h3>
      <Table1 data={data} />
      <div className="card">
        <div className={`card-body bg-${data[2][4] > 0 ? 'success' : 'warning'}`}>
          {`В анализируемом периоде валовая прибыль от продаж 
          ${data[2][4] > 0 ? 'увеличилась на ' : 'уменьшилась на '}${data[2][4]} руб
          `}
        </div>
      </div>
      <div className="card">
        <div className={`card-body bg-${data[5][4] > 0 ? 'success' : 'warning'}`}>
          {`В отчетном периоде предприятие  
          ${data[5][4] > 0
              ? 'получило прибыль в размере '
              : 'понесло убытки в размере '}${Math.abs(data[5][2])} руб
          `}
        </div>
      </div>
      <div className="card">
        <div className={`card-body bg-${data[14][4] > 0 ? 'success' : 'warning'}`}>
          {`Произошло 
          ${data[14][4] > 0
              ? 'повышение общей бухгалтерской прибыли на '
              : 'снижение общей бухгалтерской прибыли на '}${Math.abs(data[14][4])} руб
          `}
        </div>
      </div>
      <hr />
      <Table2 />
      <div className="container-sm">
        <h3>Распределение прибыли до налогообложения</h3>
        <VictoryPie data={[
          { x: "Чистая прибыль", y: (data[21][2] / (data[21][2] + data[15][2]) * 100) },
          { x: "Налоги из прибыли", y: (data[15][2] / (data[21][2] + data[15][2]) * 100) },
        ]} />
        <VictoryChart
          domainPadding={10}
        >
          <VictoryBar
            standalone={false}
            style={{ data: { fill: "#c43a31" } }}
            data={[
              { x: "1", y: data[5][3] },
              { x: "2", y: data[14][3] },
              { x: "3", y: data[21][3] },
            ]}
          />
        </VictoryChart>
        <p>1. Прибыль от продаж</p>
        <p>2. Прибыль до налогообложения</p>
        <p>3. Чистая прибыль</p>
      </div>
      <hr />
      <h3>Рачет порога рентабельности и запаса финансовой прочности</h3>
      <Table3 data={data} />
      
    </div>
  )
}

export default FinRez