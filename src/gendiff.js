import { parseFile } from './utils.js'

export default function genDiff(filepath1, filepath2) {
  const file1 = parseFile(filepath1)
  const file2 = parseFile(filepath2)

  return `diff between ${file1} and ${file2}`
}
