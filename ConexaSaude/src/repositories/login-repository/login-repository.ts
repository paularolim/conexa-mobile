import { client } from '../client';
import { LoginDTO, LoginResponse } from './types';

export async function loginRepository({
  email,
  password,
}: LoginDTO): Promise<LoginResponse | null> {
  const { data } = await client.post<LoginResponse>('login', { email, password });
  if (data.data) {
    return data;
  }

  return null;
}
