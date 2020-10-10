// documentation/web-playback-sdk/quick-start/


export const authEndpoint = "https://accounts.spotify.com/authorize"; 
const redirectUri = "https://spotifyreact-e2d3e.firebaseapp.com//";
const clientId = "2783eec2ca8d491780f9ec87ae439aa2";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-private",
    "user-read-email",
    "streaming",
    "playlist-read-collaborative",
  ];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial; 
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
      )}&response_type=token&show_dialog=true`;
