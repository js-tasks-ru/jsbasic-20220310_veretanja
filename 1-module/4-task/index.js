function checkSpam(str) {
  // ваш код...
  if ( (str.toUpperCase().indexOf(('1xBet').toUpperCase()) >= 0 )
  ||   (str.toUpperCase().indexOf('XXX') >=0 ) )
  { return true } 
  else return false;

}
