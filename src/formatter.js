function formatJson(data) {
  const result = []

  for (const d of data) {
    if (d[1] === 'removed') {
      result.push(`- ${d[0]}: ${d[2]}`)
    }
    else if (d[1] === 'added') {
      result.push(`+ ${d[0]}: ${d[2]}`)
    }
    else if (d[1] === 'unchanged') {
      result.push(`  ${d[0]}: ${d[2]}`)
    }
  }

  return result.join('\n')
}

export { formatJson }
