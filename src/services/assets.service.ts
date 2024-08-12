import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getBaseURL } from '@/utils/getBaseURL.util';
import { GetAssetsQueryParams, GetAssetsResponse } from '@/dto/asset.dto';

const API = ({ headers = {} } = {}): AxiosInstance => {
  const BASE_URL = getBaseURL('APP_ASSET_API');

  const instance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      ...headers,
    },
  });

  return instance;
};

const AssetServices = {
  getAllAssets: (query?: GetAssetsQueryParams): Promise<AxiosResponse> => {
    return API().get('/v2/assets', { params: query });
  },
  getAvailableAssets: (
    query?: GetAssetsQueryParams,
  ): Promise<AxiosResponse<GetAssetsResponse>> => {
    return API().get('/v2/assets/available', { params: query });
  },
};

export default AssetServices;
