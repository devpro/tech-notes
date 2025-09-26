# Streaming

## Softwares

* [OBS (Open Broadcaster Studio) Studio](https://obsproject.com/)
  * [Background Removal - Portrait Segmentation Plugin](https://obsproject.com/forum/resources/background-removal-portrait-segmentation.1260/) ([releases](https://github.com/royshil/obs-backgroundremoval/releases))
* ~~[VOICEMEETER BANANA Advanced Mixer](https://vb-audio.com/Voicemeeter/banana.htm)~~
  * ~~[How to Setup VoiceMeeter Banana](https://www.youtube.com/watch?v=HfdRjOuZZfk) - May 28, 2021~~
* ~~[VB-CABLE Virtual Audio Device](https://vb-audio.com/Cable/)~~
* ~~[Clipchamp](https://clipchamp.com/)~~
* [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)
* [LosslessCut](https://github.com/mifi/lossless-cut?tab=readme-ov-file#download)

## Devices

### Elgato Key Light Air

* Install Elgato Control Center

### Insta360 Link (webcam)

* Install [Insta360 Link Controller](https://www.insta360.com/fr/download/insta360-link)

### NVIDIA GeForce RTX (GPU)

* Download and install [Audio Effects & Video Effects (SDK)](https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-sdk/resources/) to be able to use NVIDIA Background Removal in OBS Studio

### Blue Yeti X

* Install [Logitech G Hub](https://www.logitechg.com/en-us/innovation/g-hub.html)

## Recording

### YouTube

* Install [FFmpeg](https://www.ffmpeg.org/download.html#build-windows)

```batch
winget install ffmpeg
```

* Use [yt-dlp](https://github.com/yt-dlp/yt-dlp) to download a live stream in the highest quality possible to import it as a video

```batch
yt-dlp.exe --merge-output-format mp4 https://www.youtube.com/live/xxxxxxxx
```
