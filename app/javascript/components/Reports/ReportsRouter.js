import React from "react";
import FinRez from './FinRez'
import CompBal from './CompBal'

const ReportsRouter = ({ type, data }) => {
    return (
        <div>
            {type == '1'
                ? <FinRez data={data} />
                : <CompBal data={data} />}
        </div>
    )
}

export default ReportsRouter