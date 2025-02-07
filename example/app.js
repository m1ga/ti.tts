const tts = require("ti.tts");

const win = Ti.UI.createWindow();

win.open();

win.addEventListener("open", function() {
	tts.init();
});
win.addEventListener("close", function() {
	tts.shutdown();
});
tts.addEventListener("init", function(e) {
        tts.emitEvents();
	tts.speak({text:"Hello! This is a test message for you."});
//	tts.synthesizeToFile("Hello");
 console.log(e);
 console.log(tts.getVoices().split("|"));
});
tts.addEventListener("start", function(e) {
	console.log(e.type,e.id);
});
tts.addEventListener("stop", function(e) {
	console.log(e.type,e.id,interrupted);
});
tts.addEventListener("error", function(e) {
	console.log(e.type,e.id,code);
});
tts.addEventListener("done", function(e) {
	console.log(e.type,e.id);
});
