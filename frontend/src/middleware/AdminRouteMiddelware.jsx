import React from 'react'
import { Outlet } from 'react-router-dom';
import "../css/admin.css";

export default function AdminRouteMiddelware() {
  return (
    <div className='admin'>
      <div className="top-header">top header</div>
      <div className="aside-section">aside</div>
      <div className="main-section">
        <Outlet />
      </div>
    </div>
  )
}
