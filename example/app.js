const tts = require("ti.tts");
const win = Ti.UI.createWindow();

win.open();

win.addEventListener("open", function() {
	tts.init();
});
tts.addEventListener("init", function(e) {
	tts.speak("Hello");
	tts.synthesizeToFile("Hello");
});
tts.addEventListener("done", function(e) {
	console.log(e.blob);
});
