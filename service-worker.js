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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "854542699755a449e23da7e7fdd7cbbb"
  },
  {
    "url": "assets/css/0.styles.7b19ecef.css",
    "revision": "b16e815fc972fa6e26f91610002378ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1faaf782.js",
    "revision": "3e39cd61dff8ac66c2c17cf25db72854"
  },
  {
    "url": "assets/js/11.c37818d4.js",
    "revision": "c1a0662b0fa07ae02257f46797c8a942"
  },
  {
    "url": "assets/js/12.f24e0586.js",
    "revision": "312ee24e6a79ad42106ef1096f3f8c10"
  },
  {
    "url": "assets/js/13.70882368.js",
    "revision": "20141c396fc095b4647f12aedccd0658"
  },
  {
    "url": "assets/js/14.c47992d9.js",
    "revision": "0901073ee3033dff8316d5ef4ae70256"
  },
  {
    "url": "assets/js/15.63e95faa.js",
    "revision": "2d8b21f080b3cbbc914f6af5afb3ef0e"
  },
  {
    "url": "assets/js/16.e536aff3.js",
    "revision": "eb0cdcec158b9bc9748c7b6e7d63f04c"
  },
  {
    "url": "assets/js/17.156581a5.js",
    "revision": "a150ed8aeb162fa8b63bd7c361bd59fe"
  },
  {
    "url": "assets/js/18.e8c88883.js",
    "revision": "4e5d374ebd590532167508b3730e1787"
  },
  {
    "url": "assets/js/19.4773deed.js",
    "revision": "204e1949bebaf3ff4876cb5e968b5d43"
  },
  {
    "url": "assets/js/2.f65fb582.js",
    "revision": "9a973ade7bbe716d73ea7885ef2d4cff"
  },
  {
    "url": "assets/js/20.f3a4ede9.js",
    "revision": "65c4b28d21354ab2d95534b67f070306"
  },
  {
    "url": "assets/js/21.0c512325.js",
    "revision": "1cfa1e4df89013d2cd6b8db158956d30"
  },
  {
    "url": "assets/js/22.c8f674d7.js",
    "revision": "87968a671624401d8170d810052d14a6"
  },
  {
    "url": "assets/js/23.041825bb.js",
    "revision": "86a96fc1691ace4d5ef760152a77aa68"
  },
  {
    "url": "assets/js/24.2caa95c0.js",
    "revision": "d12cd8c172864dff26fa46f2995adfe4"
  },
  {
    "url": "assets/js/25.624195a8.js",
    "revision": "9e331c4e279fa2a0d999abf827d30d32"
  },
  {
    "url": "assets/js/26.59cd47ed.js",
    "revision": "12fa6fd08bf313c080f1435a26d4f958"
  },
  {
    "url": "assets/js/27.e21ad8c4.js",
    "revision": "82f1e05a41fb3ef766325404ac18821c"
  },
  {
    "url": "assets/js/3.7aed7e2f.js",
    "revision": "4f64bd22a2a3caf3f2a7d5108cddfeac"
  },
  {
    "url": "assets/js/4.f35acd79.js",
    "revision": "3e5907aa6dcabd7f95398205a9f4abe8"
  },
  {
    "url": "assets/js/5.3226007d.js",
    "revision": "f26b76835e3500c7de7c8aecb9ab74c1"
  },
  {
    "url": "assets/js/6.1a712a13.js",
    "revision": "f39848840b682f86792da8d322bb9b70"
  },
  {
    "url": "assets/js/7.9ad3302b.js",
    "revision": "86b6c7d34bf1ecf08de6cc3eaf441481"
  },
  {
    "url": "assets/js/8.8dd9e957.js",
    "revision": "41b9cd80cba1aa0fdaa3cb82068996a6"
  },
  {
    "url": "assets/js/9.ca66ea0b.js",
    "revision": "baef3b7bfd09371c865f5ab47203c7a5"
  },
  {
    "url": "assets/js/app.31de7b78.js",
    "revision": "b4589c6c3da9c44a6c7e3d0a8c6d6a9d"
  },
  {
    "url": "guide/configuration.html",
    "revision": "4a1339aea945ce4449eb026ce3c4c90a"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "69ac18785e7a9502228b8a92a89ff90f"
  },
  {
    "url": "guide/experiment.html",
    "revision": "a113e906b0c23736029d20657242d106"
  },
  {
    "url": "guide/index.html",
    "revision": "6a751642a32078bf2ea70d9ed7de101a"
  },
  {
    "url": "guide/installation.html",
    "revision": "d87785f052aab13580afa598b3d5864b"
  },
  {
    "url": "guide/integration.html",
    "revision": "37eecef3477d23215fbd89dec6049622"
  },
  {
    "url": "guide/presentations.html",
    "revision": "fb0ac0161457c7de2cd5941875b15272"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "25baf0ef608e5ed33bc5099ec2934a61"
  },
  {
    "url": "guide/schema-syntax.html",
    "revision": "0c0d979e45849ee5dbbc9dd75c65c092"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "51224c7d12f0697cf0b8e2f6bf2e456f"
  },
  {
    "url": "guide/with-macaca-test.html",
    "revision": "52b45225e131861379c2c670c55c240d"
  },
  {
    "url": "index.html",
    "revision": "33cbd94b6a2a21ddbca76f87c5259aba"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "d7e297ace22009dc310abc2c9139aa25"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "6ecf2e341ed594d7bd192e2e4150c15d"
  },
  {
    "url": "zh/guide/experiment.html",
    "revision": "366d438287693150a6aa6403f6e95b2f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4b3f83ee0840ce4506ee8b5400d340af"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "003c2a4fe64b3d187696a8faebfedcdb"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "0d9c7f6e5beef031898debc3d508db0a"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "722c4f48d643217fc95a3c56a195ae3d"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "f4e20524c546339111ed0eb10aa9e704"
  },
  {
    "url": "zh/guide/schema-syntax.html",
    "revision": "3cd736066f4566687f8610de2fa1b06d"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "aa087ac11b18c48ba1245114fcbf11e2"
  },
  {
    "url": "zh/guide/with-macaca-test.html",
    "revision": "3da61a9bda401db2ea9814b37419cb22"
  },
  {
    "url": "zh/index.html",
    "revision": "a0e27647fc11aa5d97fec165cd6ba665"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
