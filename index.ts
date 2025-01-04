/**
 * The codepoints file looks like this (it is not json formatted):
 * 10k e951
 * 10mp e952
 * 11mp e953
 * 123 eb8d
 * 12mp e954
 * 13mp e955
 * 14mp e956
 * 15mp e957
 * 16mp e958
 * account_circle_filled f20b
 * account_circle_off f7b3
 * account_tree e97a
 * action_key f502
 *
 * Read the codepoints file and generate a map that looks like this: (convert from hex to decimal)
 * {
 *     "10k": 59729,
 * }
 *
 */

import fs from 'fs'
import path from 'path'

const codepointsFile = path.join(__dirname, 'MaterialSymbolsOutlined.codepoints')
const codepoints = fs.readFileSync(codepointsFile, 'utf-8')
const codepointsArray = codepoints.split('\n')
const codepointsMap = codepointsArray.reduce((acc, line) => {
    const [key, value] = line.split(' ')
    if (key && value) {
        acc[key] = parseInt(value, 16)
    }
    return acc
}, {})

console.log('Got', Object.keys(codepointsMap).length, 'codepoints')

// Write the codepoints map to a file
const codepointsMapFile = path.join(__dirname, 'map.json')

fs.writeFileSync(codepointsMapFile, JSON.stringify(codepointsMap, null, 2))
console.log('Wrote codepoints map to', codepointsMapFile)
