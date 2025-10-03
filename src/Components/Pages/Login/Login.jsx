import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { login, signUp } from '../../../Filebase'
// import { namedQuery } from 'firebase/firestore';
import netflix_spinner from '../../../assets/netflix_spinner.gif'


function Login() {

    const [sign, setSign] = useState('Sign Up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const user_auth = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (sign === "Sign In") {
            await login(email, password);
        } else {
            await signUp(name, email, password);
        }
        setLoading(false);
    }

    const signUpBtn = () => {
        setSign('Sign Up')
    }

    const signInBtn = () => {
        setSign('Sign In')
    }

    return (
        loading ? <div className="login-spinner">
            <img src={netflix_spinner} alt="" />
        </div> :
            <div className='login'>
                <img src={logo} alt="" className='login-logo' />
                <div className="login-form">
                    <h1>{sign}</h1>
                    <form>
                        {sign === 'Sign Up' ? <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /> : null}
                        <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' onClick={user_auth}> {sign}</button>
                        <div className="form-help">
                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <p>Need Help?</p>
                        </div>
                    </form>
                    <div className="form-switch">
                        {sign === "Sign Up" ?
                            <p>Already have account ? <span onClick={signInBtn}>Sign In Now </span></p> :
                            <p>New to Netflix ? <span onClick={signUpBtn}>Sign Up Now </span></p>}
                    </div>
                </div>
            </div>
    )
}

export default Login