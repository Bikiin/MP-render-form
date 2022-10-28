import { join, normalize } from 'path'

const getView = (path: string): string => {
  return normalize(join(__dirname, path))
}

export default getView
