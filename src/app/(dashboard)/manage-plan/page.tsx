import React from 'react'
import DashboardOverviewHeader from '../_components/dashboard-overview-header'
import ManagePlanContainer from './_components/manage-plan-container'

const ManagePlan = () => {
  return (
    <div>
        <DashboardOverviewHeader
        title="Manage Users"
        description="View, organize, and update all user accounts from one place."
      />
      <ManagePlanContainer/>
    </div>
  )
}

export default ManagePlan