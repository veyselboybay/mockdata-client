import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { register, login } from '../features/LoginSlice';
import { toast } from 'react-toastify';


const Register = () => {
    const [form, setForm] = useState({ email: null, password: null });
    const [error, setError] = useState(null);
    const { isLoggedIn, accessToken, success, msg, registerSuccess, registerMsg } = useSelector(state => state.login);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if ((form.email === null || form.email === '') && (form.password === null || form.password === '')) {
            return setError('Please enter all required fields!')
        }
        if (form.email === null || form.email === '') {
            return setError('Please enter your email address!')
        }
        if (form.password === null || form.password === '') {
            return setError('Please enter your password!')
        }
        e.preventDefault();
        dispatch(register(form));

    }
    useEffect(() => {
        if (registerSuccess) {
            dispatch(login(form))
        }
    }, [dispatch, registerSuccess, registerMsg])

    useEffect(() => {
        if (isLoggedIn && accessToken !== null) {
            navigate('/documentation');
        }
    }, [isLoggedIn])
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name='email'
                            onChange={(e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name='password'
                            onChange={(e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                        />
                    </div>
                    {!registerSuccess && <p className="forgot-password text-right mt-2" style={{ fontSize: 'small', color: 'red', textTransform: 'capitalize' }}>
                        {registerMsg}
                    </p>}
                    <div className="d-grid gap-2 mt-3">
                        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                    </div>
                    <p className="forgot-password text-right mt-2" style={{ fontSize: 'small' }}>
                        Already a member? <span onClick={(e) => navigate('/login')} style={{ color: 'blue', cursor: 'pointer' }}>Login</span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register