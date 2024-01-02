import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const Pricing = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3 style={{ textAlign: 'center', paddingTop: '20px' }}>Pricing</h3>
            <hr style={{ width: '70vw', marginRight: 'auto', marginLeft: 'auto' }} />
            <div style={{ textAlign: 'center', marginTop: '35px' }}>
                <div className='pricing-box'>
                    <div style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', backgroundColor: 'lightblue', display: 'inline-block', padding: '0px 10px' }}>FREE <span style={{ textDecoration: 'line-through', color: 'white' }}>$0</span></div>
                    <div style={{ borderBottom: '1px solid black', textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '10px' }}>Individuals</div>
                    <p className='pricing-item-desc'> - 5 request per day.</p>
                    <p className='pricing-item-desc'> - Quality mock data.</p>
                    <p className='pricing-item-desc'> - Access to all updates.</p>
                    <p className='pricing-item-desc'> - Unlimited Support</p>
                    <div style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', border: '2px solid lightblue', cursor: 'pointer', borderRadius: '5px' }} className='pricing-box-button' onClick={(e) => navigate('/auth')}>Get Started</div>
                </div>
                <div className='pricing-box pricing-box-middle'>
                    <div style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', backgroundColor: 'lightblue', display: 'inline-block', padding: '0px 10px' }}>FREE <span style={{ textDecoration: 'line-through', color: 'white', fontSize: 'x-large' }}>$0</span></div>
                    <div style={{ borderBottom: '1px solid black', textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '10px' }}>Hobbyists</div>
                    <p className='pricing-item-desc'> - 5 request per day.</p>
                    <p className='pricing-item-desc'> - Quality mock data.</p>
                    <p className='pricing-item-desc'> - Access to all updates.</p>
                    <p className='pricing-item-desc'> - Unlimited Support</p>
                    <div style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', border: '2px solid lightblue', cursor: 'pointer', borderRadius: '5px' }} className='pricing-box-button' onClick={(e) => navigate('/auth')}>Get Started</div>
                </div>
                <div className='pricing-box'>
                    <div style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', border: '2px solid lightblue', display: 'inline-block', padding: '0px 10px' }}>Contact</div>
                    <div style={{ borderBottom: '1px solid black', textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '10px' }}>Corporate</div>
                    <p className='pricing-item-desc'> - 5 request per day.</p>
                    <p className='pricing-item-desc'> - Quality mock data.</p>
                    <p className='pricing-item-desc'> - Access to all updates.</p>
                    <p className='pricing-item-desc'> - Unlimited Support</p>
                    <div style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold', border: '2px solid lightblue', cursor: 'pointer', borderRadius: '5px' }} className='pricing-box-button' onClick={(e) => navigate('/auth')}>Get Started</div>
                </div>
            </div>
            <BottomNav />
        </>
    )
}

export default Pricing