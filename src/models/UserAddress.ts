interface Geo {
  lat: string;
  long: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
