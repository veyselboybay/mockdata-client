import React from 'react'
import { HashLink } from 'react-router-hash-link'


const SideBar = () => {

    return (
        <div>
            <HashLink smooth to='/documentation#introduction' className="side-bar-link">Introduction</HashLink>
            <HashLink smooth to='/documentation#what-is-mock-data-api' className="side-bar-link">MockDataAPI</HashLink>
            <HashLink smooth to='/documentation#features' className="side-bar-link">Features-Capabilities-Limit</HashLink>
            <HashLink smooth to='/documentation#send-request' className="side-bar-link">Sending Request</HashLink>
            <HashLink smooth to='/documentation#data-model-format' className="side-bar-link">Data Model Format</HashLink>
            <HashLink smooth to='/documentation#response-type' className="side-bar-link">Response Type</HashLink>
            <HashLink smooth to='/documentation#sample-project' className="side-bar-link">Sample Project</HashLink>
            <div className="api-key-section">
                <br />
                <hr />
                <label htmlFor="email-section" style={{ fontWeight: 'bold' }}>Email:</label><br />
                <p id='email-section' className="key-section">veyselboybay@outlook.com</p><br />
                <label htmlFor="api-section" style={{ fontWeight: 'bold' }}>Api Key:</label><br />
                <p id='api-section' className="api-section">a4b8ad3f-611f-4c32-b82e-813523ad8e97</p>
            </div>
        </div>
    )
}

export default SideBar