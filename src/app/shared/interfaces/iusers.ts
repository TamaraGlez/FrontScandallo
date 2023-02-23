export interface Iusers {

  userName: string;
  password: string;
  warehouse?: string;
  rol?: string
  
}


export interface Login {
  token: string;
}


export interface IUserDB {

  token:string;
  userDB: Iusers
  
}
