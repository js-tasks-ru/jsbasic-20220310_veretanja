function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (const key in salaries) {
	  if ( isFinite(salaries[key] ) == true ) {
		  sum += salaries[key];
	  } 
  }
  return sum;
}
