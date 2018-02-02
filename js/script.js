(function(){
	"use strict";
	window.addEventListener('load',function(){
		if(document.getElementById('menu-opener')){
			document.getElementById('menu-opener').addEventListener("click", function(e){
				// console.log('menu-opener click');
				e.preventDefault();
				document.getElementById('menu-holder').className = 'visible';
			});
		}
		if(document.getElementById('menu-closer')){
			document.getElementById('menu-closer').addEventListener("click", function(e){
				document.getElementById('menu-holder').className = '';
			});
		}
		if(document.getElementById('menu-holder')){
			document.getElementById('menu-holder').addEventListener("click", function(e){
				// console.log('menu-holder click', this.classname, e.path);
				if(this.className == 'visible' && e.path[0].id == 'menu-holder') {
					this.className = '';
				}
			});
		}
	});
})(window, document);