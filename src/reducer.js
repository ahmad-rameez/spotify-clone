export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after developemnt
  //token: 'BQAFZ81uxWgAHzyLnIJNBy12pNbMKQBa7biFNKkA80_G3w-fjcfSzvAn86vcKQCbNUSU3DUxImOs3T_WSFh7uE-jxkJu32h-lZtKbUwP__P3Ts47d7xnaNLIRW_aQTZY0_4Og4FdD7xn8yobsyyAylCR2YYPDR0iJZVDcdcysgQrYk6jR_yh'
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_PIANO_PLAYLIST':
      return {
        ...state,
        piano_playlist: action.piano_playlist,
      };
    default:
      return state;
  }
};

export default reducer;
