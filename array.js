function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr1 = ["Beyond","Past","Crossing","Below","Above","Through","Behind"];
var arr2 = ["the","a","our","my","your","his","her","the Devil's","Satan's","the master's","God's","Jessie's"];
var arr3 = ["frozen","satanic","distant","ancient","blazing","eternal","pale","cold","corrupted","drowned","infernal","stormy","angelic","snow-covered"]
var arr4 = ["pentagram","empire","kingdom","fortress","demon","Devil","Satan","inferno","frost","blizzard","storm","woods","forest","castle","mountain","cave","evil","hell","king","lord","sword","knife","halberd","torch","tree","grave","tomb"]
arr = shuffle(arr1)[0] + " "+ shuffle(arr2)[0] + " "+ shuffle(arr3)[0]  + " "+ shuffle(arr4)[0];
console.log(arr);
