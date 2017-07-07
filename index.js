import { Linking, Platform } from 'react-native'

/**
 *
 * Link to other app with Play Store/App Store fallback
 *
 * @param {string} url URL to open other app
 * @param {object} options Options for fallback if URL can not be opened
 *
 */
const appLink = function appLink (URL, { appStoreID, appStoreLocale = 'us', playStoreID }) {
  return Linking.canOpenURL(URL).then(canOpen => {
    if (canOpen) {
      return Linking.openURL(URL)
    } else {
      if (Platform.OS === 'ios') {
        return Linking.openURL(
          appStoreID
            ? `https://itunes.apple.com/${appStoreLocale}/app/${appStoreID}`
            : 'https://itunes.apple.com/'
        )
      } else {
        return Linking.openURL(
          playStoreID
            ? `https://play.google.com/store/apps/details?id=${playStoreID}`
            : 'https://play.google.com/store'
        )
      }
    }
  })
}

export default appLink
