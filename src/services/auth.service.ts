import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getBaseURL } from '@/utils/getBaseURL.util';
import { AuthRequestBody } from '@/dto/auth.dto';

const API = ({ headers = {} } = {}): AxiosInstance => {
  const BASE_URL = getBaseURL('APP_AUTH_API');

  const instance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
  });

  return instance;
};

const AuthServices = {
  authLogin: (body: AuthRequestBody): Promise<AxiosResponse> => {
    return API().post('/', body);
  },
};

export default AuthServices;
