import React from 'react'
import toast from 'react-hot-toast'

const DashboardPage = () => {
  return (
    <>
      <div>DashboardPage</div>
      <button
        className='btn btn-primary'
        onClick={() => toast.success("this is success")}
      ></button>
    </>
  )
}

export default DashboardPage