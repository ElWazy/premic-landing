export default interface Price {
  _id: string;
  location: string;
  details: Array<Detail>;
}

interface Detail {
  destiny: string;
  amount: PriceAmount;
}

interface PriceAmount {
  normal: number;
  student: number;
  elder: number;
}
