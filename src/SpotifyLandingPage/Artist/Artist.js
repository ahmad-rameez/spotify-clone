import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongRow from '../Body/SongRow/SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Artist.css';
import { useDataLayerValue } from '../../DataLayer';

function Artist({ spotify }) {
    const [artistTracks, setArtistTracks] = useState({});
    const [{}, dispatch] = useDataLayerValue();
    const [artistInfo, setArtistInfo] = useState({});
    let { id } = useParams();
    useEffect(() => {
        spotify.getArtistTopTracks(id, "IN").then((topTracks) => {
            setArtistTracks(topTracks);
          });
          
        spotify.getArtist(id).then((artist) => {
            setArtistInfo(artist);
        });
    }, []);

    //Methods to play songs
      const playSong = (id, track) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
           
              dispatch({
                type: "SET_ITEM",
                item: track,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
        });
      };
    return (
        <div className='artist__body'>
            {artistInfo ? 
             <div className='artist__info'>
                <img src={artistInfo.images?artistInfo.images[0].url : ''} alt='' />
                <div className='artist__infoText'>
                    <strong>PLAYLISTS</strong>
                    <h2>{ artistInfo.name ?artistInfo.name :''}</h2>
                </div>
            </div> : null
            }
            <div className='artist__songs'>
                <div className='artist__icons'>
                    <PlayCircleFilledIcon 
                        className='artist__shuffle'
                    />
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                
                {/* List of songs */}
                {artistTracks.tracks ? artistTracks.tracks.map( (item) => (
                    <SongRow track={item} playSong={playSong}/>
                )): null}
            </div>
        </div>
    )
}

export default Artist;
