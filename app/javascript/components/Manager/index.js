import React, { useState } from 'react'
import Accordion from './Accordion'
import UserCard from './UserCard'
const ManagerHome = () => {
    return (
        <div>
            <Accordion />
            <UserCard />
        </div>
    )
}

export default ManagerHome