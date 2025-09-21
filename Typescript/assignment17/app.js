"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["Tokyo", "Paris", "Makkah", "New York", "Dubai"];
console.log("Original:", places);
console.log("Alphabetical:", [...places].sort());
console.log("Still Original:", places);
console.log("Reverse Alphabetical:", [...places].sort().reverse());
console.log("Still Original:", places);
places.reverse();
console.log("Reversed:", places);
places.reverse();
console.log("Back to Original:", places);
places.sort();
console.log("Sorted Alphabetical:", places);
places.sort().reverse();
console.log("Sorted Reverse:", places);
//# sourceMappingURL=app.js.map