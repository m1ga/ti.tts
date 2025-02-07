# Text-to-speech module for Titanium SDK (Android)

Simple tts (text-to-speech) module for Titanium SDK. Allows you to say a sentence and write it to a wav file.

## Methods

-   <b>init()</b>
-   <b>emitEvents()</b>
-   <b>speak({text:string})</b> - There is a character limit of 4000 characters per speak method
-   <b>synthesizeToFile({text:string,filename:string})</b>
-   <b>stop()</b>
-   <b>shutdown()</b>

## Properties

-   <b>pitch</b> (setter): float
-   <b>speed</b> (setter): float
-   <b>voices</b> (getter): string. Returns a string with voices separated by a `|`. Optional you can pass in `de-de` to only get German voices.
-   <b>voice</b> (setter): string
-   <b>language</b> (setter): string. e.g. `de` or `en`

## Events

-   <b>init()</b>: when TTS is ready
-   <b>stop()</b>: when TTS stops
-   <b>error()</b>: when TTS fails
-   <b>done()</b>: when TTS has done

## Example

```js
const tts = require("ti.tts");
const win = Ti.UI.createWindow();

win.open();

win.addEventListener("open", function() {
	tts.init();
});
tts.addEventListener("init", function(e) {
	tts.speak("Hello");
});
```


## Author

* Michael Gangolf (<a href="https://github.com/m1ga">@MichaelGangolf</a> / <a href="https://www.migaweb.de">Web</a>)

<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/miga" title="donate"><img src="https://img.shields.io/badge/buy%20me%20a%20coke-donate-orange.svg" alt="Buy Me A Coke donate button" /></a></span>
