import axios from 'axios';

export const client = axios.create({ baseURL: 'http://desafio.conexasaude.com.br/api/' });
