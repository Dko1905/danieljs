function addEvent(element, eventName	,handler){
	element.addEventListener(eventName, handler);
}

addEvent(document.getElementById('test'), 'click', test);

function test(e){
	console.log('test');
}