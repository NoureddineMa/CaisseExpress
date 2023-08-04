import React from 'react'
import { Sidebar } from '../components/superAdmin'
import { Outlet  } from 'react-router-dom'


function SuperAdminLayout() {
  return (
    <div className="flex bg-gray-50">
        <Sidebar  />
    <div className=" w-full min-h-screen" style={{marginLeft: '16rem', paddingTop: '5rem'}}>
        <Outlet />
    </div>
    </div>
  )
}

export default SuperAdminLayout
