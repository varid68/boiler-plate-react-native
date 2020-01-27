import Reactotron from 'reactotron-react-native'
import { NativeModules } from 'react-native'

if (__DEV__) {
  let scriptHostname;
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron
    .configure({ host: scriptHostname })
    .useReactNative({
      //asyncStorage: false, // there are more options to the async storage.
      networking: { // optionally, you can turn it off with false.
        ignoreUrls: /\/(www.google.com\/)$/,
      },
      //editor: false, // there are more options to editor
      //errors: { veto: (stackFrame) => false }, // or turn it off with false
      //overlay: false, // just turning off overlay
    })
    .connect();

  const yeOldeConsoleLog = console.log

  // make a new one
  console.log = (...args) => {
    // always call the old one, because React Native does magic swizzling too
    yeOldeConsoleLog(...args)

    // send this off to Reactotron.
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
    })
  }
}