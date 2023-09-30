export interface Pic {
  id: string
  descirption: string
  width: number
  height: number
  user: {
    username: string
  }
  urls: {
    raw: string
  }
}
