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
  const items = [];

  const releasesElem = document.querySelector('#newReleases');

  for (const release of data.albums.items) {
    const imageUrl = release.images[1].url;

    const releaseItemElem = document.createElement('li');
    releaseItemElem.className = 'release';

    const imageElem = document.createElement('img');
    imageElem.src = imageUrl;
    imageElem.className = 'release__img';

    const nameElem = document.createElement('h4');
    nameElem.textContent = release.name;
    nameElem.className = 'release__name';

    const artistElem = document.createElement('p');
    artistElem.textContent = release.artists[0].name;

    releaseItemElem.appendChild(imageElem);
    releaseItemElem.appendChild(nameElem);
    releaseItemElem.appendChild(artistElem);

    items.push(releaseItemElem);
  }

  releasesElem.append(...items);
}

function playlistsLoaded(data) {}
