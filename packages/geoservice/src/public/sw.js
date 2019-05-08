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
    "revision": "fecc80f21d80848c00a9d1b1fdfed42a"
  },
  {
    "url": "build/typeaheadcomponent/jjwjokpr.entry.js",
    "revision": "263c23a243eba52caab170f69730ed0a"
  },
  {
    "url": "build/typeaheadcomponent/jjwjokpr.sc.entry.js",
    "revision": "263c23a243eba52caab170f69730ed0a"
  },
  {
    "url": "build/typeaheadcomponent/typeaheadcomponent.6hkczhln.js",
    "revision": "ea129c64794de863f56bd8194ebcec86"
  },
  {
    "url": "build/typeaheadcomponent/typeaheadcomponent.p7qsflhp.js",
    "revision": "fcfed0b05961a460f3d8ded55fa53261"
  },
  {
    "url": "index.html",
    "revision": "805303729eba252d631bfc2587c97eea"
  },
  {
    "url": "manifest.json",
    "revision": "84574a5afeab12e2a572fca0b8913b20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
