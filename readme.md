## React Native Boilerplate

<br>

### `Cara Generate Screen`
- ```$ ./artisan.sh home -d```
- maka akan ter-generate satu folder di dalam "src/screens" yang berisi:
  - HomeContext.js
  - HomeScreen.js
  - HomeView.js
  - HomeStyles.js
- register "HomeScreen" di AppNavigator.js

<br>

### `CARA PENULISAN SYNTAX`
|Tipe|Penulisan|Contoh| 
|---|---|---|
|Class/Component|`CamelCase`|`class LoginScreen`|
|Local Variable|`pascalCase`|`var dataUser = []`|
|Method|`_underScorePascalCase`|`_getDataUser = async () => {}`|

<br>

#### `SHORTCUT IMPORT FILE LOOK AT FILE .babelrc || CUSTOM IF YOU WANT`

### `DIRECTORY STRUCTURE`
```bash
├── src
│   ├── actions
│   │   ├── axios.js (general function C-R-U-D)
│   |   └── storage.js (asynStorage general data getter/setter)
│   ├── assets
│   │   ├── fonts (directory all fonts)
│   |   └── images (directory all images)
│   ├── components (general components)
│   ├── configs
│   |   └── configUrl.js (baseurl API)
│   ├── constants
│   │   ├── Colors.js (define all colors)
│   │   ├── Fonts.js (define all fonts)
│   │   ├── Sizes.js (screen ratio)
│   |   └── Styles.js (general styles for components)
│   ├── i18n (translate label multi language)
│   ├── navigations
│   |   └── AppNavigator.js (register all screens)
│   ├── redux
│   │   ├── reducers (define all reducers)
│   │   ├── types.js (define all ACTION redux)
│   |   └── store.js (register all reducers)
│   ├── screens
│   │   ├── Home
│   │   |    ├── HomeContext.js
│   │   |    ├── HomeScreen.js
│   │   |    ├── HomeStyles.js
│   |   |    └── HomeView.js
│   │   ├── SplashScreen.js
│   |   └── Walkthrough.js
│   └── services
│       └── common.js (general function)
├── .babelrc
|── App.js
|── artisan.sh (screen generator)
├── package.json
├── README.md
└── shell.sh (1 = RUN || 2 = BUILD APK || 3 = OPEN TO XCODE)
```

### `SCREENSHOT TEMPLATE`

<table>
  <thead>
    <th>Template Walkthrough</th>
    <th>Template Login</th>
  </thead>
  <tbody>
    <td><img src='./walkthrough.gif' /></td>
    <td><img src='./login.png' /></td>
  </tbody>
</table>
