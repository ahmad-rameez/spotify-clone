export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  myTopArtists: null,
  //Remove after developemnt
  //token: "BQDvs2_wvbTrZth-tqzQjT2VWMdz_SK46Qt2UFGJBVUEsgi6xGw5MtP4OLIlhI7jOgcKkA6oCTQlFSF1DlKuH221rasCyza2r25FgMMcJWsU7xW9OfIoQ4RJJRfHvqdnysRJmSKT5QbgxCL0va1UBVU6c-CVwyRGHf6719-_xhK7vU7U1I1m"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_MY_TOP_ARTISTS':
      return {
        ...state,
        myTopArtists: action.myTopArtists,
      };

    case 'SET_PIANO_PLAYLIST':
      return {
        ...state,
        piano_playlist: action.piano_playlist,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
