import React from 'react'

export default function Accordion() {
  return (
    <div className='container'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Форма № 1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Форма № 1. </strong>Данные бухгалтерского баланса информируют владельца предприятия о материальных ценностях, величине запасов, инвестициях и капитале, которыми он владеет. Бухгалтерский баланс – необходимый документ для руководства и работников аналитического отдела. С помощью баланса можно составлять планирование на краткосрочную, а иногда и долгосрочную перспективу.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Форма № 2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              В Отчете по  <strong>форме № 2 </strong>приводят информацию о доходах,
              расходах, прибылях и убытках, а также о совокупном доходе предприятия за отчетный период.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Форма № 3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>Форма 3 </strong>бухгалтерской отчетности является составной частью годового финансового отчета и выступает в качестве одного из его приложений.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Форма № 4
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Форма № 4</strong> это документ, содержащий сведения о наличии денежных средств у организации и их движении, в том числе об источниках поступления и направлениях расходования этих средств.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
