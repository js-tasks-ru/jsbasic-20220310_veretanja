function namify(users) {
  // ваш код...
  let arrNamify = [];
  for (i=0; i < users.length; i++) {
	arrNamify.push(users[i].name); 
  }
  return arrNamify;
}
