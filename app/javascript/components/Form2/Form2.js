import React, { useState } from "react";

const Form2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const handleChange = (e) => {
    console.log(formValues)
    setValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const [formValues, setValues] = useState({})

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Показатель</th>
              <th scope="col">КОД</th>
              <th scope="col">Значение, тыс. руб.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">Выручка от реализации продукции, товаров, работ, услуг </th>
              <td>010</td>
              <td><input type="text" name='010' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Себестоимость реализованной продукции, товаров, работ, услуг </th>
              <td>020</td>
              <td><input type="text" name='020' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Валовая прибыль (010-020) </th>
              <td>030</td>
              <td>{formValues['030']}</td>
            </tr>
            <tr>
              <th scope="row">Управленческие расходы</th>
              <td>040</td>
              <td><input type="text" name='040' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы на реализацию</th>
              <td>050</td>
              <td><input type="text" name='050' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от реализации продукции, товаров, работ, услуг (030-040-050)</th>
              <td>060</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Прочие доходы по текущей деятельности</th>
              <td>070</td>
              <td><input type="text" name='070' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие расходы по текущей деятельности</th>
              <td>080</td>
              <td><input type="text" name='080' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от текущей деятельности (±060+070-080)</th>
              <td>090</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Доходы по инвестиционной деятельности</th>
              <td>100</td>
              <td><input type="text" name='100' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы по инвестиционной деятельности</th>
              <td>110</td>
              <td><input type="text" name='110' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Доходы по финансовой деятельности</th>
              <td>120</td>
              <td><input type="text" name='120' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Расходы по финансовой деятельности </th>
              <td>130</td>
              <td><input type="text" name='130' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) от инвестиционной и финансовой деятельности (100–110+120–130) </th>
              <td>140</td>
              <td></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Прибыль (убыток) до налогообложения (±090±140) </th>
              <td>150</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Налог на прибыль </th>
              <td>160</td>
              <td><input type="text" name='160' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Изменение отложенных налоговых активов</th>
              <td>170</td>
              <td><input type="text" name='170' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Изменение отложенных налоговых обязательств</th>
              <td>180</td>
              <td><input type="text" name='180' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие налоги и сборы, исчисляемые из прибыли (дохода)</th>
              <td>190</td>
              <td><input type="text" name='190' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прочие платежи, исчисляемые из прибыли (дохода)</th>
              <td>200</td>
              <td><input type="text" name='200' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Прибыль (убыток), перераспределяемые в пределах юридического лица</th>
              <td>205</td>
              <td><input type="text" name='205' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Чистая прибыль (убыток) (±150–160±170±180–190–200±205) </th>
              <td>210</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Результат от переоценки долгосрочных активов, не включаемый в чистую прибыль (убыток)</th>
              <td>220</td>
              <td><input type="text" name='220' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Результат от прочих операций, не включаемый в чистую прибыль (убыток)</th>
              <td>230</td>
              <td><input type="text" name='230' onChange={handleChange} /></td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Совокупная прибыль (убыток) (±210±220±230) </th>
              <td>240</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Базовая прибыль (убыток) на акцию </th>
              <td>250</td>
              <td><input type="text" name='250' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th scope="row">Разводненная прибыль (убыток) на акцию</th>
              <td>260</td>
              <td><input type="text" name='260' onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default Form2