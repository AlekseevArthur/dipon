import React, { useState } from 'react'
import Accordion from './Accordion'
import FormsTable from './FormsTable'
import OrgCard from './OrgCard'
import ReportsTable from './ReportsTable'

const ManagerHome = (props) => {
    return (
        <div>
            <hr />
            <OrgCard org={props.org} />
            <FormsTable />
            <Accordion />
            <hr />
            <h3>Отчеты</h3>
            <ReportsTable />
        </div>
    )
}

export default ManagerHome