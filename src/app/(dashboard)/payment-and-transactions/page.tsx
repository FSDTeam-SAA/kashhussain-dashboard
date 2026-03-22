import React from 'react'
import DashboardOverviewHeader from '../_components/dashboard-overview-header'
import PaymentAndTransactionsContainer from './_components/payment-and-transactions-container'

const PaymentAndTransactions = () => {
  return (
    <div>
        <DashboardOverviewHeader
        title="Manage Users"
        description="View, organize, and update all user accounts from one place."
      />
      <PaymentAndTransactionsContainer/>
    </div>
  )
}

export default PaymentAndTransactions