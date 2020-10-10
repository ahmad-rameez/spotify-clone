import React from 'react'
import './SpotifyLandingPage.css';
import LandingPageBody from './LandingPageBody/LandingPageBody';
import SideBar from './SideBar/SideBar';
import Body from './Body/Body';
import Artist from './Artist/Artist';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer';

function SpotifyLandingPage({ spotify }) {
    return (
        <Switch>
        <div className='player'>
            <div className='player__body'>
                <SideBar />
                <Route exact path='/'> <LandingPageBody spotify={spotify}/> </Route>
                <Route exact path='/artist/:id'><Artist spotify={spotify}/></Route>
                {/* <Body spotify={spotify}/> */}
            </div>
            <Footer spotify={spotify} />
        </div>
        </Switch>
    )
}

export default SpotifyLandingPage;
