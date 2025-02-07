# Text-to-speech module for Titanium SDK (Android)

Simple tts (text-to-speech) module for Titanium SDK. Allows you to say a sentence and write it to a wav file.

## Methods

-   <b>init()</b>
-   <b>speak({text:string,uid:string,volume:float,pan:float,flush:boolean})</b> - There is a character limit (of 4000 characters) per speak method that can be read from bufferlen properties.
-   <b>synthesizeToFile({text:string,filename:string,uid:string,volume:float,pan:float,blob:boolean})</b>
-   <b>stop()</b>
-   <b>shutdown()</b>
-   <b>getVoices(filter:string)</b> - Returns a string with voices separated by a `|`. Optionally you can pass in a string to filter on voices names, for example `de-de` to only get German voices.
-   <b>initSilent()</b> - Init without events emitter
-   <b>emitEvents()</b> - Start events emitter

## Properties

-   <b>pitch</b> (setter): float
-   <b>speed</b> (setter): float
-   <b>voices</b> (getter): string. Returns a string with voices separated by a `|`. Optional you can pass in `de-de` to only get German voices.
-   <b>voice</b> (setter): string
-   <b>language</b> (setter): string. e.g. `de` or `en`
-   <b>speaking</b> (getter): boolean. (DO NOT RELY ON THIS ON INIT! You could need to start flushing the queque after init. )
-   <b>bufferlen</b> (getter): int. Maximum length of the text string to read (Usually 4000 character)

## Events

-   <b>init</b>: when TTS is ready
-   <b>stop</b>: when TTS stops
-   <b>error</b>: when TTS fails
-   <b>done</b>: when TTS has done (includes `blob` with the sound file if available)

## Voices' names

 Voices are in the fromat:

    <lang>-<region>-x-<flags>-<type>
    
 Where:
  - &lt;lang&gt; and &lt;region&gt; are 2 char ISO codes (i.e. it, de, en)
  - &lt;flags&gt; is a usually 3 char voice description
  - &lt;type&gt; can be "local" (on device voice), "network" (on cloud voice) or "language" (not specified)

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
* T. A. (<a href="https://github.com/informate">@TA</a> / <a href="https://www.informate.it">Web</a>)

<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/miga" title="donate"><img src="https://img.shields.io/badge/buy%20me%20a%20coke-donate-orange.svg" alt="Buy Me A Coke donate button" /></a></span>
