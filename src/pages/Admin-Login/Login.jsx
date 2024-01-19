import React, { useState } from 'react'
import '../../App.css';
import * as Components from '../../Components';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Adminlogin = () => {
    function showAlert1() {
        toast.success("SuccessFully! Registered");
    }
    function showError() {
        toast.error('Please Check Email and Password Again');
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit1 = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, mobile, password })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/event')
                }
                else {
                    showError()
                }
            })
            .catch(err =>
                console.log(err),
            )
    }
    const [signIn, toggle] = React.useState(true);
    return (
        <>
            <Components.Mcontainer>
                <ToastContainer/>
                <Components.Container className='Cbody'>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit1}>
                            <Components.Title >Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} required />
                            <Components.Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                            <Components.Input type='mobile' placeholder='Mobile' onChange={(e) => setMobile(e.target.value)} required />
                            <Components.Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                            <Components.Button onClick={showAlert1}>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                            <Components.Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button >Sigin In</Components.Button>
                            <GoogleOAuthProvider clientId="446061591121-opbuk29t8r85tdq2uia6am4m54ioqleh.apps.googleusercontent.com">
                                <div style={{ margin: 10 }}>
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            var decoded = jwt_decode(credentialResponse.credential);
                                            console.log(decoded);
                                        }}
                                        onError={() => {
                                            console.log('Login Failed')
                                        }}
                                    />
                                </div>
                            </GoogleOAuthProvider>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sigin Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </Components.Mcontainer>
        </>
    )
}

export default Adminlogin