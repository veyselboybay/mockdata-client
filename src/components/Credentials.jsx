import React from 'react'

const Credentials = () => {
    return (
        <div style={{ textAlign: 'center' }} className='credentials-on-top'>
            <label htmlFor="email-section" style={{ fontWeight: 'bold' }}>Email:</label>
            <p id='email-section' className="key-section">veyselboybay@outlook.com</p><br />
            <label htmlFor="api-section" style={{ fontWeight: 'bold' }}>Api Key:</label>
            <p id='api-section' className="api-section">a4b8ad3f-611f-4c32-b82e-813523ad8e97</p>
        </div>
    )
}

export default Credentials