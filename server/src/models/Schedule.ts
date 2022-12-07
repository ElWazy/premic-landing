export default interface Schedule {
  _id: string;
  location: string;
  itinerary: Array<PointToPoint>;
}

interface PointToPoint {
  start: Path;
  end: Path;
}

interface Path {
  place: string;
  time: Date;
}
