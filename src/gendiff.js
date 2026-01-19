import { parseFile } from './utils.js'
import diffBuilder from './diffbuilder.js'
import { formatJson } from './formatter.js'

export default function genDiff(filepath1, filepath2) {
  const file1 = parseFile(filepath1)
  const file2 = parseFile(filepath2)

  const result = diffBuilder(file1, file2)

  return formatJson(result)
}
