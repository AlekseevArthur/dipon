import React from "react";
import Table1 from './Table1'
import Table2 from './Table2'
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from "victory";

const FinRez = ({ data }) => {
  return (
    <div className='container'>
      <h3>Динамика факторов формирования результатов деятельности</h3>
      <Table1 data={data} />
      <div className="card">
        <div className={`card-body bg-${data[2][4] > 0 ? 'success' : 'warning'}`}>
          {`В анализируемом периоде валовая прибыль от продаж 
          ${data[2][4] > 0 ? 'увеличилась на ' : 'уменьшилась на '}${data[2][4]} тыс. руб
          `}
        </div>
      </div>
      <div className="card">
        <div className={`card-body bg-${data[5][4] > 0 ? 'success' : 'warning'}`}>
          {`В отчетном периоде предприятие  
          ${data[5][4] > 0
              ? 'получило прибыль в размере '
              : 'понесло убытки в размере '}${Math.abs(data[5][2])} тыс. руб
          `}
        </div>
      </div>

      <div className="card">
        <div className={`card-body bg-${data[14][4] > 0 ? 'success' : 'warning'}`}>
          {`Произошло 
          ${data[14][4] > 0
              ? 'повышение общей бухгалтерской прибыли на '
              : 'снижение общей бухгалтерской прибыли на '}${Math.abs(data[14][4])} тыс. руб
          `}
        </div>
      </div>
      <hr />
      <Table2 />
      <div className="container">
        <VictoryPie data={[
          { x: "Cats", y: 60 },
          { x: "Dogs", y: 40 },
        ]} />
        <VictoryChart
          domainPadding={10}
        >
          <VictoryBar
            standalone={false}
            style={{ data: { fill: "#c43a31" } }}
            data={[
              { x: "1", y: data[5][4] },
              { x: "2", y: data[14][4] },
              { x: "3", y: data[21][4] },
            ]}
          />
        </VictoryChart>
        <p>1. Прибыль от продаж</p>
        <p>2. Прибыль до налогообложения</p>
        <p>3. Чистая прибыль</p>
      </div>
    </div>
  )
}

export default FinRez