import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login/Login';
import SpotifyLandingPage from './SpotifyLandingPage/SpotifyLandingPage';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getNewReleases().then((recommended) => {
        console.log(recommended, "recome")
      });

      

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });

      spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response) => {
        dispatch({
          type: 'SET_PIANO_PLAYLIST',
          piano_playlist: response,
        });
      });
    }

    // spotify.getAlbums().then((response) => (
    //   dispatch({
    //     type: "SET_ALBUMS",
    //     albums: response,
    //   })
    // ));
  }, []);

  return (
        <div className='app'>
          {token ? (
            <SpotifyLandingPage spotify={spotify} />
          ) : (
            <Login />
          )}
        </div>
      
  );
}

export default App;
