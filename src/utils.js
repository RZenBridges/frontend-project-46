import fs from 'fs'

function parseJson(filepath) {
  try {
    const text = fs.readFileSync(filepath, 'utf8')
    return JSON.parse(text)
  }
  catch {
    console.log(`Invalid path: ${filepath}`)
  }
}

function parseFile(filepath) {
  if (filepath.endsWith('.json')) {
    return parseJson(filepath)
  }
  else {
    console.log(console.log('This file format is not supported'))
  }
}

function isAssociativeArray(value) {
  if (typeof value === 'object' && value !== null) {
    return !Array.isArray(value)
  }

  return false
}

export { isAssociativeArray, parseFile }
