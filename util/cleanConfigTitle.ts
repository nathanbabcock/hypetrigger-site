export default function cleanConfigTitle(title: string) {
  return title.replace(/\(.*?\)/g, '').trim()
}
