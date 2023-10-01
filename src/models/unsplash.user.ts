export interface User {
  id: string
  username: string
  first_name: string
  last_name: string
  location: string
  bio: string
  profile_image: {
    small: string
  }
}
