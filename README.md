# Use Material Symbols (2022) with Expo Icons

Download `map.json` from the [Releases](https://github.com/terros-tech/expo-material-symbols/releases/latest) page OR clone the project and run `pnpm tsx index.ts` to generate `map.json`.

Use it in your Expo project as described [in the documentation](https://docs.expo.dev/guides/icons/#createiconset):

```js
import glyphMap from './map.json'
const MaterialSymbols = createIconSet(glyphMap, 'Material Icons', 'MaterialIcons-Regular.ttf')
```

Note that the actual PostScript font name is "Material Icons"

The latest `fonts.json` can be obtained from Google Fonts

```
https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true
```
