import React from "react";


const Form1 = () => {
    return (
        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">АКТИВ</th>
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
                <tr className="table-primary">
                    <th scope="row">I. Долгосрочные активы</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr></tr>
            </tbody>
        </table>
    )
}

export default Form1