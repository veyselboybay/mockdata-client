import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout, setCredentials } from '../src/features/LoginSlice'


const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
        return null;
    }
}

const AuthVerify = () => {
    const { accessToken, isLoggedIn } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        const token = window.localStorage.getItem('accessToken');
        if (accessToken === null && token !== null) {
            const email = window.localStorage.getItem('email')
            const apiKey = window.localStorage.getItem('apiKey')
            dispatch(setCredentials({ email, accessToken: token, apiKey }))
        }
        if (accessToken) {
            const decoded = parseJwt(accessToken);
            if (decoded.expiresIn * 1000 < Date.now()) {
                dispatch(logout())
            }
        }
    }, [location])
    return;
}
export default AuthVerify