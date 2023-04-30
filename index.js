document.addEventListener("DOMContentLoaded", () => {
    $('#about').hide();
});


function about(){
    const aboutbtn = document.getElementById("about-btn");
    const homebtn = document.getElementById('home-btn');
    const html = document.getElementById('html');
    const navbar = document.getElementById('nav');
    html.classList.add('background');
    navbar.classList.add('background');
    console.log("About");
    homebtn.classList.remove("clicked");
    aboutbtn.classList.add("clicked");
    $('#home').hide();
    $('#about').show();
}

function home(){
    const html = document.getElementById('html');
    const navbar = document.getElementById('nav');
    html.classList.remove('background');
    navbar.classList.remove('background');
    const aboutbtn = document.getElementById("about-btn");
    console.log("Home");
    aboutbtn.classList.remove("clicked");
    $('#about').hide();
    $('#home').show();
}

// pZounTNXl3EdLEivb9didgep2BHnlCYy
function getAll(){
// Replace YOUR_CLIENT_ID with your SoundCloud client ID
const clientId = 'pZounTNXl3EdLEivb9didgep2BHnlCYy';
// The SoundCloud API endpoint for getting tracks by The Weeknd
const endpoint = `https://api.soundcloud.com/users/15926073/tracks?client_id=${clientId}&limit=10`;

// Use AJAX to fetch the tracks from the SoundCloud API
$.ajax({
  url: endpoint,
  method: 'GET',
  success: function(tracks) {
    tracks.forEach(function(track) {
      console.log(track.title);
      console.log(track.user.username);
      console.log(track.permalink_url);
      console.log(track.artwork_url);
    });
  },
  error: function(error) {
    console.log(error);
  }
});

}




