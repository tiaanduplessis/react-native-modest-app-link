
<h1 align="center">react-native-modest-app-link</h1>
<div align="center">
  <strong>Link to other app with Play Store/App Store fallback</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/react-native-modest-app-link">
    <img src="https://img.shields.io/npm/v/react-native-modest-app-link.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/react-native-modest-app-link">
  <img src="https://img.shields.io/npm/dm/react-native-modest-app-link.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/react-native-modest-app-link">
    <img src="https://img.shields.io/travis/tiaanduplessis/react-native-modest-app-link.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-modest-app-link/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-modest-app-link.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/react-native-modest-app-link/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/react-native-modest-app-link.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-modest-app-link/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/react-native-modest-app-link.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20react-native-modest-app-link!%20https://github.com/tiaanduplessis/react-native-modest-app-link%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/react-native-modest-app-link.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/react-native-modest-app-link/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#prerequisite">Prerequisite</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/react-native-modest-app-link.svg)](https://greenkeeper.io/)

Wrapper around [React Native Linking](https://facebook.github.io/react-native/docs/linking.html) API to try and open other app. If unsuccessful it falls back to the Play Store or App Store respectively.


## prerequisite

Please make sure linking is setup correctly for your app. Some useful links:

- [React Native Linking Docs](https://facebook.github.io/react-native/docs/linking.html)
- [How to launch app on click of url in android](https://stackoverflow.com/questions/41807300/how-to-launch-app-on-click-of-url-in-android)
- [Launching iOS Applications Via URL](http://www.informit.com/articles/article.aspx?p=2301787)
- [iOS 9 not opening Instagram app with URL SCHEME](https://stackoverflow.com/questions/30987986/ios-9-not-opening-instagram-app-with-url-scheme)

## Install

```sh
$ npm install react-native-modest-app-link
# OR
$ yarn add react-native-modest-app-link
```

## Usage

```js
import appLink from 'react-native-modest-app-link'


appLink('checkersapp://', {
  appStoreID: 'id554151744', // defaults to just opening the App Store if not provided
  appStoreLocale: 'za', // Defaults to 'us' if not provided
  playStoreID: 'za.co.shoprite.eezicoupon' // // defaults to just opening the Play Store if not provided
}).catch((error) => {
  // ...
})

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/react-native-modest-app-link/issues).

## License

Licensed under the MIT License.
