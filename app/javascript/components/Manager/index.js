import React, { useState } from 'react'
import Accordion from './Accordion'
import FormsTable from './FormsTable'
import OrgCard from './OrgCard'

const ManagerHome = (props) => {
    return (
        <div>
            <hr />
            <OrgCard org={props.org} />
            <FormsTable />
            <Accordion />
        </div>
    )
}

export default ManagerHome