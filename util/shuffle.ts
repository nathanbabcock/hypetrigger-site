/**
 * Fisher-Yates (aka Knuth) Shuffle in-place
 * @source https://stackoverflow.com/a/2450976
 */
export default function shuffle<T>(array: T[]): void {
  let currentIndex: number = array.length, randomIndex: number

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
}
