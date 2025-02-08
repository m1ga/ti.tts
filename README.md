# Text-to-speech module for Titanium SDK (Android)

Simple tts (text-to-speech) module for Titanium SDK. Allows you to say a sentence and write it to a wav file.

## Methods

-   <b>init()</b>
-   <b>init( engine: string )</b> - Init specific TTS Engine if available
-   <b>speak({ text: string, uid: string, volume: float, pan: float, flush: boolean })</b> - There is a character limit (of 4000 characters) per speak method. The exact maximum allowed length can be read from the bufferlen property.
-   <b>synthesizeToFile({ text: string, filename: string, uid: string, volume: float, pan: float, blob: boolean })</b>
-   <b>stop()</b>
-   <b>shutdown()</b>
-   <b>setup({ voice: string, language: string, volume: float, pan: float, speed: float, pitch: float, flush: boolean, uid: boolean, filename: string, blob: boolean})</b> - Default configuration for Speaker
-   <b>getVoices( filter: string )</b> - Returns a string with voices separated by a `|`. Optionally you can pass in a string to filter on voices names, for example `de-de` to only get German voices.
-   <b>initSilent()</b> - Init without events emitter
-   <b>emitEvents()</b> - Start events emitter
-   <b>separateSpeaker()</b> - Return new Instance of TTS ( Experimental feature, marked as Deprecated ).
-   <b>getEngines()</b>
-   <b>getLanguages()</b>
-   <b>getEngineList()</b>
-   <b>getEnginePackageList()</b> - The Engines' Package Name for init(engine) and setEngine(engine).
-   <b>getLanguageList()</b>
-   <b>getEngines()</b>
-   <b>getVoiceList( filter: string )</b>
-   <b>getVoiceFeatures( voice: string )</b>
-   <b>setEngine( engine: string )</b> - Deprecated, because do not emit init Event when Engine is ready. Use init(engine) instead.


## Properties

-   <b>pitch</b> (setter): float
-   <b>speed</b> (setter): float
-   <b>voices</b> (getter): string. Returns a string with voices separated by a `|`. Optional you can pass in `de-de` to only get German voices.
-   <b>voice</b> (setter): string
-   <b>language</b> (setter): string. e.g. `de` or `en`
-   <b>speaking</b> (getter): boolean. (DO NOT RELY ON THIS ON INIT! You could need to start flushing the queque after init. )
-   <b>bufferlen</b> (getter): int. Maximum length of the text string to read (Usually 4000 character)

## Events

-   <b>init</b>: when TTS is ready - CallBack({ status: string })
-   <b>stop</b>: when TTS stops - CallBack({ uid: string, interrupted: boolean })
-   <b>error</b>: when TTS fails - CallBack({ uid: string, code: int })
-   <b>done</b>: when TTS has done (Can include a Blob for SynthToFile)- CallBack({ uid: string, blob: Blob })

## Voices' names

 Voices' names are in the format:

    <lang>-<region>-x-<flags>-<type>
    
 Where:
  - &lt;lang&gt; and &lt;region&gt; are 2 char ISO codes (i.e. `it`, `de`, `en`)
  - &lt;flags&gt; is a usually 3 char voice description
  - &lt;type&gt; can be `local` (on device voice), `network` (on cloud voice) or `language` (not specified)

## Engines' names

 Engines' names from getEngines and getEngineList are in the format:

    <name> @<package>
    
 Where:
  - &lt;name&gt; is the engine label name
  - &lt;package&gt; is the engine pakage name for setEngine and init(engine)

 Engines' Package Names List can be retrived from getEnginePackageList().

## Setup Attributes

 - volume: Float, Range [ 0 , 1 ], Default 1.
 - pan: Float, Range [ -1 , 1 ], Default 0.
 - pitch: Float, Default 1.
 - speed: Float, Default 1, 2 double speed, 0.5 half speed.
 - flush: Boolean, Speak Queue FLUSH or ADD.
 - blob: Retrive Blob to done event.
 - uid: Utterance ID.
 - filename: File name for synthetizeToFile.

## Notes

 - There is a limit of bufferlen (4000) characters for each call to speak and synthetizeToFile.
 - Sometime after on init event a queque FLUSH could be needed to start speaking (especially if speaking is true).
 
## Example

```js
const tts = require("ti.tts");
const win = Ti.UI.createWindow();

win.open();

win.addEventListener("open", function() {
	tts.init();
});
tts.addEventListener("init", function(e) {
	tts.speak({text:"Hello", flush:true});
});
```


## Authors

* Michael Gangolf (<a href="https://github.com/m1ga">@MichaelGangolf</a> / <a href="https://www.migaweb.de">Web</a>)
* T. A. (<a href="https://github.com/informate">@TA</a> / <a href="https://www.informate.it">Web</a>)

<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/miga" title="donate"><img src="https://img.shields.io/badge/buy%20me%20a%20coke-donate-orange.svg" alt="Buy Me A Coke donate button" /></a></span>
