import { isAssociativeArray } from './utils.js'

const unchanged = 'unchanged'
const nested = 'nested'
const added = 'added'
const removed = 'removed'
const changed = 'changed'

export default function diffBuilder(data1, data2) {
  const result = []
  const allKeys = new Set([...Object.keys(data1), ...Object.keys(data2)])

  for (const key of allKeys) {
    const val1 = data1[key]
    const val2 = data2[key]

    if (val2 === undefined && key in data1) {
      result.push([key, removed, val1])
    }
    else if (val1 === undefined && key in data2) {
      result.push([key, added, val2])
    }
    else if (val1 === val2) {
      result.push([key, unchanged, val1])
    }
    else {
      if (isAssociativeArray(val1) && isAssociativeArray(val2)) {
        const subDiff = diffBuilder(val1, val2)
        result.push([key, nested, subDiff])
      }
      else {
        result.push([key, changed, [val1, val2]])
      }
    }
  }

  return result
}
