import React from 'react'
import { RiSettingsLine, RiImageLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const DashNav = () => {
    return (
        <nav className="sidebar">
            <div className="logo d-flex justify-content-between">
                <a href="client.github.io/#/dashboard"><img src={require("../img/logo2.png")} alt="" /></a>
                <div className="sidebar_close_icon d-lg-none">
                    <i className="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu" className="metismenu">
                <li className="bars">
                    <Link to='/dashboard'>
                        <img src={require("../img/1.svg")} alt="" />
                        <span className='bars-span'>Dashboard</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/profile'>
                        <img src={require("../img/2.svg")} alt="" />
                        <span className='bars-span'>Blogs</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/apps'>
                        <img src={require("../img/3.svg")} alt="" />
                        <span className='bars-span' >Apps</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/images'>
                        <RiImageLine size={'90%'} />
                        <span className='bars-span'>Images</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/settings'>
                        <RiSettingsLine />
                        <span className='bars-span'>Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default DashNav