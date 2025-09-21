"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks)
        album.tracks = tracks;
    return album;
}
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 12));
console.log(make_album("Artist3", "Album3"));
//# sourceMappingURL=app.js.map