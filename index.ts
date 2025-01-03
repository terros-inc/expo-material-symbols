import fonts from "./fonts.json"

console.log('total' , fonts.icons.length)

const uniqueFonts = Array.from(new Set(fonts.icons.map(icon => icon.name)));

console.log('unique', uniqueFonts.length)

// create a map of fonts that contains only the latest version of every font name

const latestFontMap = fonts.icons.reduce((acc, font) => {
  if (!acc[font.name]) {
    acc[font.name] = font
  } else {
    if (acc[font.name].version < font.version) {
      acc[font.name] = font
    }
  }
  return acc
}, {})

console.log('latestFontMap', Object.keys(latestFontMap).length)

// from the latest font map, create an object that looks like Record<string,number> where string is the name and number is the code point

const fontCodePoints = Object.entries<(typeof fonts)['icons'][number]>(latestFontMap).reduce((acc, [name, font]) => {
  acc[name] = font.codepoint
  return acc
}, {})

console.log('fontCodePoints', Object.keys(fontCodePoints).length)

// write fontCodePoints to disk

import fs from 'node:fs'

fs.writeFileSync('fontCodePoints.json', JSON.stringify(fontCodePoints, null, 2))
