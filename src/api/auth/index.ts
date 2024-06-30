import { api } from '@/boot/axios'
import { BackendPositionsModel } from './models'
enum API {
  POSITIONS = '/api/v1/positions',
}
export function apiGetPositions() {
  return api.get<BackendPositionsModel>(API.POSITIONS)
}
