export interface BackendPositionsModel {
    succes: boolean
    positions: PositionsList[]
  }
  export interface PositionsList {
    id: number
    name: string
  }