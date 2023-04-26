import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { RiPencilFill } from 'react-icons/ri'
import indexService from '../../services/indexService'
import axios from 'axios'

const Profile = () => {
    let initialDetails = {
        files: { 0: {}, length: "" }
    }
    const initialUser = {
        id: "",
        username: "",
        password: "",
        image: "",
        avatar: ""
    }

    const navigate = useNavigate()


    const [cookies, setCookies] = useCookies(['token'])
    const [Details, setDetails] = useState(initialDetails)


    const [Type, settype] = useState("test")

    const [user, setUser] = useState(initialUser)

    const [avatars, setAvatar] = useState(initialUser.avatar)
    const [file, setfile] = useState(user.image)



    const responses = (id) => {
        indexService.edit(id)
            .then((response) => {
                setUser(response.data)
                setAvatar(response.data.avatar)
                setfile(response.data.image)
            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {

        responses(cookies.token)
    }, [cookies.token])
    useEffect(() => {
        (() => {
            if (file) {
                document.getElementById('img').style.backgroundImage = `url(${file})`
            }
        })()
    }, [file])


    const Show = () => {
        if (Type == "password") {
            settype("text")
        } else {
            settype("password")
        }
    }
    const handleImageChange = event => {


        const pic = event.target.files
        if (pic.length == 1) {
            setDetails({ ...Details, ['files']: event.target.files[0] })

            const uri = URL.createObjectURL(event.target.files[0])

            setfile(uri)

        }
    };

    const handlePostChange = event => {

        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };


    const Post =
        async (event) => {

            event.preventDefault();
            console.log(Details.files)
            const formData = new FormData();
            formData.append("file", Details.files);
            formData.append("upload_preset", "sYmb@l1C");

            axios.post(`https://api.cloudinary.com/v1_1/dyevylpk8/image/upload`, formData).then((response) => {
                if (response.data.secure_url) {
                    const oldurl = response.data.secure_url
                    const newurl = oldurl.split(".j")
                    const url = newurl[0] + ".png"
                    setUser({ ...user, ['image']: url })
                    indexService.update(cookies.token, { user: user, url: url }).then((response) => {
                        navigate('/dashboard')
                    }).catch((error) => {
                        console.log(error)
                    })

                    console.log(user)
                    console.log(url);
                }
            })
                .catch((error) => {
                    console.log(error);
                });
            ;
        }

    return (
        <div className="root2">
            <main className="MuiGrid-root MuiGrid-container css-1jrn2fe-MuiGrid-root">
                <div
                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-4 MuiGrid-grid-md-7 css-fjzy89-MuiGrid-root"></div>
                <div
                    className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-5 css-gadse4-MuiPaper-root-MuiGrid-root"
                >



                    <div className="MuiBox-root css-1y8ugea" >

                        <div
                            className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1999axt-MuiAvatar-root" id="img" style={{ width: "280px", height: "280px", backgroundColor: "lightblue", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '280px,280px' }}

                        ><h1 className="MuiTypography-root MuiTypography-h5 css-ag7rrr-MuiTypography-root"
                            style={{ position: "relative", left: "16%", fontSize: "100%" }}>

                                {(function () {

                                    if (!file) {
                                        return avatars

                                    } else {

                                    }
                                })(file)}
                            </h1>

                            <input type='file' id='files' accept='image/*' onChange={handleImageChange} name='files' style={{ display: 'none' }} />
                            <h1
                                className="MuiTypography-root MuiTypography-h5 css-ag7rrr-MuiTypography-root"
                                style={{ position: "relative", top: "25%" }}>
                                <label htmlFor='files'>
                                    Edit<RiPencilFill />
                                </label>
                            </h1>
                        </div>
                        <form className="MuiBox-root css-164r41r" encType="multipart/form-data" onSubmit={Post} noValidate="">
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
                                        value={user.username}
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
                                        value={user.password}
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
                                Submit<span
                                    className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                ></span>
                            </button>
                            <p
                                className="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-5k114j-MuiTypography-root"
                            >
                                Copyright ©
                                <a
                                    className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1kgfegd-MuiTypography-root-MuiLink-root"
                                    href="http://localhost:3000/login"
                                >pablo-codes </a>
                                2023.
                            </p>
                        </form>
                    </div>
                </div >
            </main >
        </div >
    )
}

export default Profile