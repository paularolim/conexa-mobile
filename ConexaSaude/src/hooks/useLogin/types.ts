export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    nome: string;
    email: string;
    token: string;
  };
}
