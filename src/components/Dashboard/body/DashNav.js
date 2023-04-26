import React from 'react'
import { RiSettingsLine, RiImageLine } from 'react-icons/ri'
const DashNav = () => {
    return (
        <nav className="sidebar">
            <div className="logo d-flex justify-content-between">
                <a href="https://demo.dashboardpack.com/finance-html/index.html"><img src={require("../img/logo.png")} alt="" /></a>
                <div className="sidebar_close_icon d-lg-none">
                    <i className="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu" className="metismenu">
                <li className="bars">
                    <a className="" href="/dashboard" >

                        <img src={require("../img/1.svg")} alt="" />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="bars">
                    <a className="" href="/products" >
                        <img src={require("../img/2.svg")} alt="" />
                        <span>Blogs</span>
                    </a>
                </li>
                <li className="bars">
                    <a className="" href="/images" >
                        <RiImageLine size={'90%'} />
                        <span>Images</span>
                    </a>
                </li>
                <li className="bars">
                    <a className="" href="/settings" >
                        <RiSettingsLine />
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default DashNav