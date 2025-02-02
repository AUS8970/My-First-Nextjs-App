import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        Hi
      </div>
      <div className="col-span-9">
        {children}
      </div>
    </div>
  )
}
