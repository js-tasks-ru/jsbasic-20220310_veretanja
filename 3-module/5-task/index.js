function getMinMax(str) {
  // ваш код...
  	let result = {
		min: 999999999,
		max: 0
	}
	let num = 0;
	let strSplit = str.split(' ');
	for (i = 0; i < strSplit.length; i++) {
		if ( !(isNaN(strSplit[i])) ){  
			 num = Number(strSplit[i]) ;
			if (num < result.min) result.min = num;
			if (num > result.max) result.max = num;
		}
	}
	return result;
}
