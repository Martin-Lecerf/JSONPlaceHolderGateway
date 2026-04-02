import { Company, UserAddress } from '../User';

export interface UserDTOIn {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: Company;
}
