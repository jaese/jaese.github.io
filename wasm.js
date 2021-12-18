export const instantiate = async (url, imports) => {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  const obj = await WebAssembly.instantiate(buffer, imports)
  return obj
}
