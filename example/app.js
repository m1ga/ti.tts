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
	console.log('Init Status: ',e.status);
	tts.emitEvents();
	const voices=tts.getVoices('en').split("|");
 	console.log(voices.join(', '));
	if (voices.length>0)
		tts.voice=voices[0];
	tts.speak({text:"Hello! This is a test message for you."});
	console.log('Synt to: ', tts.synthesizeToFile({text:"Hello", filename:'tts-test.wav'}));
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
	if (e.blob)
		console.log(e.blob);
});
