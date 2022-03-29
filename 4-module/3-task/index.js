function highlight(table) {
  // ваш код... 
  let iStatus, iGender, iAge;
  for (c = 0; c < table.rows[0].cells.length; c++){
	  if (table.rows[0].cells[c].innerHTML ==`Status`) iStatus = c;
	  else {
		  if (table.rows[0].cells[c].innerHTML ==`Gender`) iGender = c;
		  else {
			  if (table.rows[0].cells[c].innerHTML ==`Age`) iAge = c;
		  }
	  }
  }
  for (i = 1; i < table.rows.length; i++) {
	 if ( table.rows[i].cells[iStatus].hasAttribute('data-available') == false ) { 
		 table.rows[i].setAttribute('hidden','true');
	 } else {
		  if ( table.rows[i].cells[iStatus].getAttribute('data-available') == "true") {
			  table.rows[i].classList.add('available'); 
			  } else table.rows[i].classList.add('unavailable');
	  } 
	 if ( table.rows[i].cells[iGender].innerText == 'm' ) {
		table.rows[i].classList.add('male');
	  } else table.rows[i].classList.add('female');
	if ( table.rows[i].cells[iAge].innerText < 18 ) {
		table.rows[i].setAttribute('style',"text-decoration: line-through");
	}
  }

} ;
