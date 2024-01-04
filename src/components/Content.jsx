import React from 'react'

import Credentials from "../components/Credentials";
import { useSelector } from 'react-redux';

const baseUrl = import.meta.env.VITE_BASE_URL;

const Content = () => {
    const { isLoggedIn } = useSelector(state => state.login);
    return (
        <>
            {isLoggedIn && <Credentials />}
            <h3 id='introduction' style={{ textAlign: 'center' }}>Introduction</h3>
            <br /><p style={{ fontWeight: '500' }}>Welcome to the Mock Data API documentation.</p>
            <p>It's hard to put together a <span style={{ textDecoration: 'underline' }}>meaningful UI prototypes</span> without a <span style={{ color: 'green', fontWeight: '500' }}>dataset that fits into your data models</span>. We are here to make your life easier.</p>
            <p style={{ fontWeight: '500' }} id='what-is-mock-data-api'>What is MockDataAPI?</p>
            <p><span style={{ color: 'green', fontWeight: '500' }}>MockDataAPI</span> leverages AI to generate customized mock data tailored to your application's data models. While you are more focused on the software you are building, we will be returning the data you need. </p>
            <p style={{ fontWeight: '500' }} id='features'>Key Features, Capabilities and Limits:</p>
            <li>In order to use MockDataAPI, you have to register and you will be given an <span style={{ color: 'green', backgroundColor: 'lightgrey', padding: '5px', fontWeight: '500', borderRadius: '5px' }}>apiKey</span>, you will use it when requesting a mock data. Detailed explanation is provided below.</li>
            <li>We will be returning <span style={{ color: 'green', fontWeight: '500' }}>20</span> different mock data based on the model you provided.</li>
            <li>You only have <span style={{ color: 'red' }}>5 request per day limit</span>, make sure you don't exceed that limit.</li><br />
            <p style={{ fontWeight: '500' }} id='send-request'>Sending a Request Using <a href="https://www.npmjs.com/package/axios" target='_blank'>Axios</a>:</p>
            <span><span>***</span>You have to send a <span style={{ color: 'red', fontWeight: '500' }}>POST</span> request in order to get your data.</span>
            <div id="termynal" data-termynal>
                <span data-ty style={{ fontSize: 'smaller' }}>
                    &nbsp;&nbsp;&nbsp;<span style={{ color: 'lightblue' }}>axios</span><span style={{ color: 'yellow' }}>.post</span>('{baseUrl}/api/v1/data/<span style={{ color: 'red', fontWeight: '500' }}>$MOCK_DATA_API_KEY</span>',<span style={{ color: 'lightgreen', fontWeight: '500' }}>{'{"your":"model"}'}</span>)<br /> &nbsp;&nbsp;.then(res {'=>'} {'console.log(res.data)'})<br />&nbsp;&nbsp;{'.catch(error)'}{'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.log(error.response.data)'}
                    <br />{'}'}
                </span>
            </div>
            <p>In the above code, Post request is sent along with the required data model attached in request body. And, we are accessing the response as <span style={{ color: 'green', backgroundColor: 'lightgrey', padding: '5px', fontWeight: '500', borderRadius: '5px' }}>res.data</span>. Also, we are accessing the error ,if any, by using <span style={{ color: 'green', backgroundColor: 'lightgrey', padding: '5px', fontWeight: '500', borderRadius: '5px' }}>error.response.data</span></p>

            <br /><p style={{ fontWeight: '500' }} id='data-model-format'>Data Model Format <span style={{ color: 'green', backgroundColor: 'lightgrey', padding: '5px', fontWeight: '500', borderRadius: '5px', fontSize: 'small' }}>Recommended</span></p>
            <div id="termynal" data-termynal>
                <span data-ty style={{ fontSize: 'smaller' }}>
                    {'{'}<br />
                    &nbsp;&nbsp;"id":"Integer",<br />
                    &nbsp;&nbsp;"name":"String",<br />
                    &nbsp;&nbsp;"lastname":"String",<br />
                    &nbsp;&nbsp;{'...'}<br />
                    &nbsp;&nbsp;{'...'}<br />
                    &nbsp;&nbsp;{'...'}<br />
                    {'}'}
                </span>
            </div>
            <p>While formatting your data, we recommend specifying fields and types explicitly in a JSON format as you can see the example above.</p>
            <br /><p style={{ fontWeight: '500' }} id='response-type'>Response Type </p>
            <div id="termynal" data-termynal>
                <span data-ty style={{ fontSize: 'smaller' }}>
                    // If there is no error;<br />
                    {'{'}<br />
                    &nbsp;&nbsp;"success": <span style={{ color: 'lightblue' }}>True</span>,<br />
                    &nbsp;&nbsp;"msg":'[Objects]', // returns Array obj as a String, needs JSON.parse()<br />
                    {'}'}<br />
                    // If there is error;<br />
                    {'{'}<br />
                    &nbsp;&nbsp;"success": <span style={{ color: 'red' }}>False</span>,<br />
                    &nbsp;&nbsp;"msg":"Error message",<br />
                    {'}'}
                </span>
            </div>
            <p>As you can see from the above code snippet, response object consists of 2 objects,
                <br />
                1. <span style={{ color: 'green', backgroundColor: 'lightgrey', padding: '5px', fontWeight: '500', borderRadius: '5px', fontSize: 'small' }}>"success"</span> object gives a hint before we use the data, <br />
                2. <span style={{ color: 'green', backgroundColor: 'lightgrey', padding: '5px', fontWeight: '500', borderRadius: '5px', fontSize: 'small' }}>"msg"</span> object either returns the data in an array as a String requires 'JSON.parse(res.data.msg)' or error message
            </p>

            <br /><p style={{ fontWeight: '500' }} id='sample-project'> Sample Project </p>
            <p className='sample-project-body'>Sample project is in progress and not ready yet. We are working hard to prepare everything for your convenience.</p>

            <br /><br /><br /><br />
        </>
    )
}

export default Content