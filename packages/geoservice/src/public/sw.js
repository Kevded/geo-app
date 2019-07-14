/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/typeaheadcomponent.js",
    "revision": "c409ca5067d93079419895bb5da4d1f5"
  },
  {
    "url": "build/typeaheadcomponent/sxlvqvjr.entry.js",
    "revision": "b172ef42f26b1c55687efc56c3b66140"
  },
  {
    "url": "build/typeaheadcomponent/sxlvqvjr.sc.entry.js",
    "revision": "b172ef42f26b1c55687efc56c3b66140"
  },
  {
    "url": "build/typeaheadcomponent/typeaheadcomponent.irw6vpym.js",
    "revision": "8915ba56960c9111610d1acb3e19e12c"
  },
  {
    "url": "build/typeaheadcomponent/typeaheadcomponent.ygheytyt.js",
    "revision": "62085e62d62d3caa381c04b77633bfb1"
  },
  {
    "url": "index.html",
    "revision": "c17240bb5292b4ab73997ea52e3ccfbc"
  },
  {
    "url": "manifest.json",
    "revision": "84574a5afeab12e2a572fca0b8913b20"
  },
  {
    "url": "swagger-ui/index.html",
    "revision": "c17240bb5292b4ab73997ea52e3ccfbc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
