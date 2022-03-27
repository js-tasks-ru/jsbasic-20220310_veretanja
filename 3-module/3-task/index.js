function camelize(str) {
  // ваш код...
  let strArr = str.split('-');
  let newStr = strArr[0];
  for (i = 1; i < strArr.length; i++)  {
	  newStr =  newStr + strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
  }
  return newStr;

}
