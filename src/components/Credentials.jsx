import React from 'react'
import { useSelector } from 'react-redux'

const Credentials = () => {
    const { email, apiKey } = useSelector(state => state.login);
    return (
        <div style={{ textAlign: 'center' }} className='credentials-on-top'>
            <label htmlFor="email-section" style={{ fontWeight: 'bold' }}>Email:</label>
            <p id='email-section' className="key-section">{email && email}</p><br />
            <label htmlFor="api-section" style={{ fontWeight: 'bold' }}>Api Key:</label>
            <p id='api-section' className="api-section">{apiKey && apiKey}</p>
        </div>
    )
}

export default Credentials