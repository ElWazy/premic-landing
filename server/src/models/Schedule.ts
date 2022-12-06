export default interface Schedule {
  _id: string;
  location: string;
  pointToPoint?: Array<PointToPoint>;
  loop?: Array<Path>
}

interface Path {
  place: string;
  time: Date;
}

interface PointToPoint {
  start: Path;
  end: Path;
}
