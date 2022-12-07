import { Coords } from "./Coords";

export default interface Bus {
  _id: string;
  patent: string;
  location: string;
  schedule: string;
  price: string;
  coords: Coords;
}
