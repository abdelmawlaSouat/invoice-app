import { Address } from "./Address";

export type Person = {
  id: string;
  name: string;
  email: string;
  addressId?: string;
  address: Address;
};
