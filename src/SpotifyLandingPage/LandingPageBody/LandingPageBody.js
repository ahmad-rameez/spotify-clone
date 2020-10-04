import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './LandingPageBody.css';

function LandingPageBody({ spotify }) {
  const [{ myTopArtists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyTopArtists().then((myTopArtists) => {
      dispatch({
        type: 'SET_MY_TOP_ARTISTS',
        myTopArtists: myTopArtists,
      });
    });
  }, []);

  return (
    <div className='landingPageBody'>
      <div className='top__artist'>
        <h2 className='heading__card'>Your favorite artists</h2>
        <div className='container__card'>
          {myTopArtists
            ? myTopArtists.items.map((artist) => {
                return (
                  <div className='card'>
                    <img alt='No image' src={artist.images[0].url} />
                    <h4>{artist.name}</h4>
                    <p>{artist.type}</p>
                    <PlayCircleFilledIcon
                      className='icon__card'
                      fontSize='large'
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default LandingPageBody;
