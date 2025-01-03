# Generate Expo Icons font map from Google Fonts

Obtain the latest `fonts.json` and font files from Google Fonts

```
https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true
```

Run the script
```
pnpm tsx index.ts
```

Use the generated `map.json` in your Expo project as described [in the documentation](https://docs.expo.dev/guides/icons/#createiconset):

```js
import glyphMap from './map.json'
const MaterialSymbols = createIconSet(glyphMap, 'Material Icons', 'MaterialIcons-Regular.ttf')
```

Note that the actual PostScript font name is "Material Icons"
