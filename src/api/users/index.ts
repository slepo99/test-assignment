import { api } from '@/boot/axios'
import { BackendUsersModel } from './models'
enum API {
  USERS = '/api/v1/users',
}
export function apiGetUsers(page: number, count: number) {
  const params = {
    page,
    count,
  }
  return api.get<BackendUsersModel>(API.USERS, { params })
}
