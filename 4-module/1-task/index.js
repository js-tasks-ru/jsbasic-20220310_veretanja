function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  friends.forEach(elem => {
	  let liCurr = document.createElement('li');
	  liCurr.innerHTML = elem.firstName + ' ' + elem.lastName ;
	  ul.append(liCurr);  
  } );
  return ul;

}
