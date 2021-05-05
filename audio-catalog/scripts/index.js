// Load data

fetch('../data/new-releases.json')
  .then((response) => response.json())
  .then(newReleasesLoaded);

fetch('../data/playlists.json')
  .then((response) => response.json())
  .then(playlistsLoaded);

// Your code

/*
  ul#newRelease
    li
      img
*/

function newReleasesLoaded(data) {
  const imageUrl = data.albums.items[0].images[1].url;

  const releasesElem = document.querySelector('#newReleases');

  const releaseItemElem = document.createElement('li');
  releaseItemElem.className = 'release';

  const releaseItemImageElem = document.createElement('img');
  releaseItemImageElem.src = imageUrl;

  releaseItemElem.appendChild(releaseItemImageElem);

  releasesElem.appendChild(releaseItemElem);
}

function playlistsLoaded(data) {}
