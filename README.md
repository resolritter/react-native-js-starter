This starter kit is based on the default template from
[react-native-cli](https://github.com/react-native-community/cli).

# Libraries

- Navigation: `react-navigation-stack`
- State management: `react-redux`, `redux-persist` and `redux-persist-filesystem-storage`

# Other differences

- Different `.prettierrc`.
- `MainActivity.java` has been modified to showcase how to interact with intent
  data on launch.
- `metro.config.js` has been tweaked for allowing root imports from the `src`
  folder, a pattern which better matches web React applications.
- uses `patch-package` to squelch annoying warnings from the react-native
  toolchain ([metro #287](https://github.com/facebook/metro/issues/287)).
