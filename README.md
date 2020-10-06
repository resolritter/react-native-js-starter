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

# Developing

First of all, [set up your environment](https://gist.github.com/resolritter/8b8a8b7ccbd119eb4921d8331294a19f).

For running the application

1. In one terminal, run `yarn run start`
2. On another terminal, run `yarn run [platform]` (e.g. `yarn run android`)

`yarn run [platform]` is supposed to do both steps in one but, in practice, it
does not work.
