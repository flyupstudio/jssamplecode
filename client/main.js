var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];
function _js(selector){
	var _selector = selector;
	if(typeof(_selector) == 'string'){
		_selector = window.document.getElementById(selector);	
	}
	this.$ = _selector;
}
_js.prototype.addClass = function(className){
	
	this.$.classList.add(className);
	return this;
}
_js.prototype.removeClass = function(className){
	//for tests
	this.$.classList.remove(className);
	return this;
}
_js.prototype.toggleClass = function(className){
	this.$.classList.toggle(className);
	return this;
}

_js.prototype.addEl = function(element, append){
	var _el = document.createElement(element);
	var _add = append || typeof(append) == 'undefined';
	
	if(_add){
		this.$.appendChild(_el);		
	}
	return new _js(_el);
}
_js.prototype.html = function(value){
	if(typeof(value) == 'undefined'){
		return this.$.innerHTML;
	}
	this.$.innerHTML = value;
	return this;
}
_js.prototype.togleOnClick = function(className){
	var _this = this;
	console.log(_this,className);
	this.$.addEventListener('click', function(e){
		_this.toggleClass(className);
	});
	return this;
}

var _UL = null;
window.onload = function(){
	_UL = new _js('app');	
	for(var i=0; i < todos.length;i++){
		_UL.addEl('li').html(todos[i]).togleOnClick('text-through');								
	}
}