export interface BackendUsersModel {
  success: boolean
  page: number
  total_pages: number
  total_users: number
  count: number
  links: UserModelLinks
  users: UserModelList[]
}
export interface UserModelLinks {
  next_url: string | null
  prev_url: string | null
}
export interface UserModelList {
  id: number
  name: string
  email: string
  phone: string
  position: string
  position_id: number
  registration_timestamp: number
  photo: string
}
