import React from 'react'
import DashNav from './body/DashNav'
import './css/bootstrap1.css'
import './css/Dashboard.css'
import './css/style1.css'
import './css/metisMenu.css'
import DashBody from './body/DashBody'
const Dashboard = () => {
    return (
        <div>
            <DashNav />
            <DashBody />
        </div>
    )
}

export default Dashboard