fetch('../data/new-releases.json')
  .then((response) => response.json())
  .then(newReleasesLoaded);

fetch('../data/playlists.json')
  .then((response) => response.json())
  .then(playlistsLoaded);

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
    artistElem.className = 'release__artist';

    releaseItemElem.appendChild(imageElem);
    releaseItemElem.appendChild(nameElem);
    releaseItemElem.appendChild(artistElem);

    items.push(releaseItemElem);
  }

  releasesElem.append(...items);
}

function playlistsLoaded(data) {
  // console.log(data.playlists.items);

  for (const playlist of data.playlists.items) {
    // Name
    // console.log(playlist.name);
    // Description
    // console.log(playlist.description);
    // Image
    // console.log(playlist.images[0].url);
    // Tracks count
    // console.log(playlist.tracks.total);
  }
}
