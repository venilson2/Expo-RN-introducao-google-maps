import Coordinate from "./Coordinate";

export default interface CoordinateResponse {
    id: number,
    name: string,
    status: string,
    coords: Coordinate[]
  }