import React from "react";
import Table1 from "./Table1";

const CompBal = ({ data }) => {
    console.log(data)
    return <div className="container">
        <h1>Сравнительный аналитический баланс</h1>
        <p>Анализ финансового состояния организации начинается со сравнительного аналитического баланса. При этом выявляются важнейшие характеристики:</p>
        <p>- общая стоимость имущества организации;</p>
        <p>- стоимость иммобилизованных и мобильных средств;</p>
        <p>- величина собственных и заемных средств организации и др</p>
        <p>Оценка данных сравнительного аналитического баланса – это, по сути, предварительный
            анализ финансового состояния, позволяющий судить
            о платеже-, кредитоспособности и финансовой
            устойчивости организации, характере использования
            финансовых ресурсов
        </p>
        <hr />
        <Table1 data={data} />
    </div>
}

export default CompBal