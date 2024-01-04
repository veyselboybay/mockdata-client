import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Register = () => {
    const [form, setForm] = useState({ email: null, password: null });
    const [error, setError] = useState(null);
    const { isLoggedIn } = useSelector(state => state.login);
    const navigate = useNavigate()
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

        console.log(form);
    }

    useEffect(() => {
        if (isLoggedIn) {
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
                    {error && <p className="forgot-password text-right mt-2" style={{ fontSize: 'small', color: 'red', textTransform: 'capitalize' }}>
                        {error}
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