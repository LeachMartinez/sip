export type TypeUser = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  isAuth: boolean;
  avatar?: string;
  role?: string;
}