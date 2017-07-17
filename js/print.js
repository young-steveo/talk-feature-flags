;(function() {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'css/print/' + (window.location.search.match(/print-pdf/gi) ? 'pdf' : 'paper') + '.css';
	document.getElementsByTagName('head')[0].appendChild(link);
}());