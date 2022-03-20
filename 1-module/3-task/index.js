function ucFirst(str) {
  // ваш код...
  str = str.replace(/ +/g, ' ').trim();
  switch(str.lenght) {
		case 0: 
			str = ''; break;
		case 1:
			str = str.charAt(0).toUpperCase();break; 
		default:
		  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
  return str;
}
  


