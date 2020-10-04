import React from 'react'
import './SpotifyLandingPage.css';
import LandingPageBody from './LandingPageBody/LandingPageBody';
import SideBar from './SideBar/SideBar';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function SpotifyLandingPage({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>
                <SideBar />
                {/* Move the Body to the correct Section */}
                <LandingPageBody spotify={spotify}/>
                {/* <Body spotify={spotify}/> */}
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default SpotifyLandingPage;
