module.exports = function(x) {
	if (x > 100) {
		return 'big';
	}else if (x < 0) {
		return 'negative';
	}


	if(x % 2 === 0) {
		return 'even';
	}else if (x % 2 === 1) {
		return 'odd';
	}

}