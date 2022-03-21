let calculator = {
  // ваш код
	calcA: 0,
	calcB: 0,
	read: function(a,b) {
		this.calcA = a;
		this.calcB = b;
  	},
  	sum:  function() { return this.calcA + this.calcB },  
	mul:  function() { return this.calcA * this.calcB } 
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
