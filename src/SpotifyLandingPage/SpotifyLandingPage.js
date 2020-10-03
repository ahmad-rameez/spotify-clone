import React from 'react'
import './SpotifyLandingPage.css';
import SideBar from './SideBar/SideBar';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function SpotifyLandingPage({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>
                <SideBar />
                <Body spotify={spotify}/>
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default SpotifyLandingPage;
