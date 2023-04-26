import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import './SignIn.css'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import blogService from '../../services/blogService'



const SignUp = () => {
    let initialDetails = {
        email: "",
        username: "",
        password: ""
    }
    let newInitialDetails = {
        email: "",
        username: "",
        password: ""
    }
    const navigate = useNavigate()


    const [cookies, setCookies] = useCookies(['token'])
    const [Details, setDetails] = useState(initialDetails)
    const [newDetails, setNewDetails] = useState(newInitialDetails)
    const [successful, setSuccessful] = useState(false)

    const [Type, settype] = useState("password")
    useEffect(() => {
        (() => {
            if (successful) {
                navigate("/dashboard")
            }
        })()
    }, [successful])

    const Show = () => {
        if (Type == "password") {
            settype("text")
        } else {
            settype("password")
        }
    }
    const handlePostChange = event => {

        const { name, value } = event.target;
        setDetails({ ...Details, [name]: value });


    };

    const Post =
        async (event) => {

            event.preventDefault();



            if (Details.email && Details.password && Details.username) {
                blogService.registerUser(Details).then((response) => {
                    const data = response.data
                    console.log(data)
                    if (data) {
                        var today = Date()
                        var tomorrow = new Date()
                        tomorrow.setDate(today + 4)
                        setCookies('token', response.data, { path: '/', expires: tomorrow })
                        setSuccessful(true)
                    }
                    else {
                        setSuccessful(false)
                    }


                }).catch(
                    err => {
                        console.log(err)
                    }
                )
            } else {
                console.log('null values')
            }
        }
    return (
        <div className="root2">
            <main className="MuiGrid-root MuiGrid-container css-1jrn2fe-MuiGrid-root">
                <div
                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-4 MuiGrid-grid-md-7 css-fjzy89-MuiGrid-root"></div>
                <div
                    className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-5 css-gadse4-MuiPaper-root-MuiGrid-root"
                >
                    <div className="MuiBox-root css-1y8ugea">
                        <div
                            className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1999axt-MuiAvatar-root"
                        >
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="LockOutlinedIcon"
                            >
                                <path
                                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                                ></path>
                            </svg>
                        </div>
                        <h1
                            className="MuiTypography-root MuiTypography-h5 css-ag7rrr-MuiTypography-root"
                        >
                            Sign Up
                        </h1>
                        <form className="MuiBox-root css-164r41r" onSubmit={Post} noValidate="">
                            <div
                                className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root"
                            >
                                <label
                                    className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled Mui-required css-1sumxir-MuiFormLabel-root-MuiInputLabel-root"
                                    data-shrink="true"
                                    htmlFor="email"
                                    id="email-label"
                                >Email Address<span
                                    aria-hidden="true"
                                    className="MuiInputLabel-asterisk MuiFormLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
                                >
                                        *</span> </label>
                                <div
                                    className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-md26zr-MuiInputBase-root-MuiOutlinedInput-root"
                                >
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                                        onChange={handlePostChange}
                                        value={Details.email}
                                    />
                                    <fieldset
                                        aria-hidden="true"
                                        className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                                    >
                                        <legend className="css-7nxzgd">
                                            <span>Email Address&nbsp;*</span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>


                            <div
                                className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root"
                            >
                                <label
                                    className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled Mui-required css-1sumxir-MuiFormLabel-root-MuiInputLabel-root"
                                    data-shrink="true"
                                    htmlFor="username"
                                    id="username-label"
                                >Username<span
                                    aria-hidden="true"
                                    className="MuiInputLabel-asterisk MuiFormLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
                                >
                                        *</span></label>
                                <div
                                    className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-md26zr-MuiInputBase-root-MuiOutlinedInput-root"
                                >
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={handlePostChange}
                                        value={Details.username}
                                        className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                                    />
                                    <fieldset
                                        aria-hidden="true"
                                        className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                                    >
                                        <legend className="css-7nxzgd">
                                            <span>Username&nbsp;*</span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>
                            <div
                                className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root"
                            >
                                <label
                                    className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled Mui-required css-1sumxir-MuiFormLabel-root-MuiInputLabel-root"
                                    data-shrink="true"
                                    htmlFor="password"
                                    id="password-label"
                                >Password<span
                                    aria-hidden="true"
                                    className="MuiInputLabel-asterisk MuiFormLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
                                >
                                        *</span></label>
                                <div
                                    className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-md26zr-MuiInputBase-root-MuiOutlinedInput-root"
                                >
                                    <input
                                        name="password"
                                        type={Type}
                                        onChange={handlePostChange}
                                        value={Details.password}
                                        className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                                    />

                                    {(function () {

                                        if (Type == "password") {

                                            return <AiFillEye size={"7%"} onClick={Show} />
                                        } else {
                                            return <AiFillEyeInvisible size={"7%"} onClick={Show} />
                                        }
                                    })(Type)}
                                    <fieldset
                                        aria-hidden="true"
                                        className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                                    >
                                        <legend className="css-7nxzgd">
                                            <span>Password&nbsp;*</span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>
                            <label
                                className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-j204z7-MuiFormControlLabel-root"
                            ><span
                                className="MuiCheckbox-root MuiCheckbox-colorPrimary MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root Mui-checked css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root"
                            ><input
                                        className="PrivateSwitchBase-input css-1m9pwf3"
                                        type="checkbox"
                                        value="remember" /><svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                        ></path>
                                    </svg>
                                    <span
                                        className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                    ></span></span><span
                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-ahj2mt-MuiTypography-root"
                                    >Remember me</span></label><button
                                        className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root  css-1vhaqj4-MuiButtonBase-root-MuiButton-root"
                                        tabIndex="0"

                                        type="submit"
                                    >
                                Sign Up<span
                                    className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                ></span>
                            </button>
                            <div
                                className="MuiGrid-root MuiGrid-container css-11lq3yg-MuiGrid-root"
                            >
                                <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-1vd824g-MuiGrid-root"
                                >
                                    <a
                                        className="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways css-wpssva-MuiTypography-root-MuiLink-root"
                                        href="http://localhost:3000/login#"
                                    >Forgot password?</a
                                    >
                                </div>
                                <div className="MuiGrid-root MuiGrid-item css-13i4rnv-MuiGrid-root">
                                    <a
                                        className="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways css-wpssva-MuiTypography-root-MuiLink-root"
                                        href="signin"
                                    > Have an account? Sign In</a>
                                </div>
                            </div>
                            <p
                                className="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-5k114j-MuiTypography-root"
                            >
                                Copyright ©
                                <a
                                    className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1kgfegd-MuiTypography-root-MuiLink-root"
                                    href="http://localhost:3000/login"
                                >SebPrestele</a>
                                2023.
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SignUp