import React from 'react'
import AdminHeader from './AdminHeader'

function AdminPage() {
  return (
    <AdminHeader>
      {/* Add your dashboard components here */}
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
        {/* Add more content here */}
      </div>
    </AdminHeader>
  )
}

export default AdminPage