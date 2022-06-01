export const IGDB_IMG_URL = 'https://images.igdb.com/igdb/image/upload'

export const getCoverImg = (id?: number | string) =>
  id ? `${IGDB_IMG_URL}/t_cover_big/${id}.png` : ''
