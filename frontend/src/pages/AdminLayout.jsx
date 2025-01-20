import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/AdminComponents/Sidebar';

export default function AdminLayout() {
    return (
        <div  className="d-flex w-100 container m-0 p-1 g-2 border"> 
        
            <div className="sidebar w-30">
            <Sidebar />
            </div>

            {/* content */}
            <div className='content w-100 contentVercel' >
            <Outlet/>
            </div>
        </div>
    )
}
