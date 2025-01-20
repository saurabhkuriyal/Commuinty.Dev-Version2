import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu
} from 'cdbreact';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { userlogout } from '../../feature/handleApi/tokenSlice';
import { deleteUser } from '../../feature/handleApi/userSlice';

function Sidebar() {

    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.name);

    function handleClick() {
        dispatch(userlogout())
        dispatch(deleteUser());
    }
    return (
        <CDBSidebar>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <div className="items itemsVercel mx-2">

                        <Link to={'/admin/dashboard'}><DashboardIcon/><p>Overview</p></Link>
                        <Link to={'/admin/dashboard/post'}><DynamicFeedIcon /><p>User Posts</p></Link>
                        <Link to={'/admin/dashboard/users'}><PeopleAltIcon /><p>Users Info</p></Link>
                        <Link to={'/admin/dashboard/newsletter'}><FeedIcon /><p>Newsletters</p></Link>
                        <Link to={'/admin/dashboard/messages'}><EmailIcon /><p>Messages</p></Link>
                        <Link to={'/underdevelopment'}><CardMembershipIcon /><p>Premium Members</p></Link>
                        <Link to={'/underdevelopment'}><CategoryIcon /><p>Our Products</p></Link>
                        <Link to={'/underdevelopment'}><RemoveCircleIcon /><p>Removed Posts</p></Link>

                    </div>


                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter className='CDBVercel' >
                <div
                    className="sidebar-btn-wrapper sidebar-btn-wrapperVercel "
                >
                    <p onClick={handleClick}><LogoutIcon /> Logout</p>
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default Sidebar;