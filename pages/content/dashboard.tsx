import React from 'react'
import Sidebar from '../../components/Project/Sidebar'
import TableContent from '../../components/Project/TableContent'

const Dashboard = () => {
  return (
    <div className='h-[90vh] dark:bg-gray-900 flex w-screen'>
        <Sidebar/>
        <div>
            <TableContent/>
        </div>
    </div>
  )
}

export default Dashboard