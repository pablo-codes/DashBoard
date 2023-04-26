import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import indexService from '../../../services/indexService';

const DashBody = () => {
    const initialDetails = {

        user: {
            username: "",
            role: "",
            image: ""
        },
        total: "",
        images: "",
        avatar: ""
    }
    const [cookies, setCookies] = useCookies(['token'])
    const [Details, setDetails] = useState(initialDetails)
    const id = cookies.token
    const responses = (id) => {
        indexService.index(id)
            .then((response) => {
                setDetails(response.data)

            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {

        responses(id)
    }, [id])

    return (
        <section className="main_content dashboard_part">
            <div className="container-fluid g-0">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="header_iner d-flex justify-content-between align-items-center">
                            <div className="sidebar_icon d-lg-none">
                                <i className="ti-menu"></i>
                            </div>
                            <div className="serach_field-area">
                                <div className="search_inner">
                                    <form action="https://demo.dashboardpack.com/finance-html/index.html#">
                                        <div className="search_field">
                                            <input type="text" placeholder="Search here..." />
                                        </div>
                                        <button type="submit">
                                            <img src={require("../img/icon_search.svg")} alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="header_right d-flex justify-content-between align-items-center">
                                <div className="header_notification_warp d-flex align-items-center">
                                    <li>
                                        <a href="https://demo.dashboardpack.com/finance-html/index.html#">
                                            <img src={require("../img/bell.svg")} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://demo.dashboardpack.com/finance-html/index.html#">
                                            <img src={require("../img/msg.svg")} alt="" />
                                        </a>
                                    </li>
                                </div>
                                <div className="profile_info">{(function () {
                                    if (!Details.user.image) {
                                        return <div className="avatar-xs"><span className="avatar-title rounded-circle bg-soft-primary text-primary">{Details.avatar}</span></div>

                                    } else {
                                        return <img src={Details.user.image} />
                                    }
                                })(Details.user.image)

                                }
                                    <div className="profile_info_iner">
                                        <p>Welcome {Details.user.role}!</p>
                                        <h5>{Details.user.username}</h5>
                                        <div className="profile_info_details">
                                            <a href="/profile">My Profile <i className="ti-user"></i></a>
                                            <a href="https://demo.dashboardpack.com/finance-html/index.html#">Settings <i className="ti-settings"></i></a>
                                            <a href="https://demo.dashboardpack.com/finance-html/index.html#">Log Out <i className="ti-shift-left"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_content_iner ">
                <div className="container-fluid plr_30 body_white_bg pt_30">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="single_element">
                                <div className="quick_activity">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="quick_activity_wrap">
                                                <div className="single_quick_activity">
                                                    <h4>Total Blogs</h4>
                                                    <h3><span className="counter">{Details.total}</span></h3>
                                                    <div className="icon-div" style={{ position: "relative", left: "40%" }}>
                                                        <div className="icon">
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4>Total Images</h4>
                                                    <h3> <span className="counter">{Details.images}</span></h3>
                                                    <div className="icon-div" style={{ position: "relative", left: "40%" }}>
                                                        <div className="icon">
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4>Uploaded Blogs</h4>
                                                    <h3> <span className="counter">0</span></h3>
                                                    <p>Manage</p>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4>Uploaded Images</h4>
                                                    <h3> <span className="counter">0</span></h3>
                                                    <p>Manage</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div >
                </div >
            </div >








            <div className="footer_part">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="footer_iner text-center">
                                <p>
                                    2020 © Influence - Designed by<a href="https://demo.dashboardpack.com/finance-html/index.html#">
                                        Dashboard</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DashBody