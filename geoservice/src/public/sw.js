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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index-org.html",
    "revision": "8136945d5241b4b59e6190d5282945cb"
  },
  {
    "url": "index.html",
    "revision": "53afe5581ec18cb1e7a5e0c4d95684e2"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-1635c1a0.js"
  },
  {
    "url": "build/p-747da4d6.js"
  },
  {
    "url": "build/p-d0882b30.js"
  },
  {
    "url": "build/p-zfhvaa9g.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "277d2affd8acb2a0ab028bf1dda78496"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
