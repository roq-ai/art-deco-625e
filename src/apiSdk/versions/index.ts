import axios from 'axios';
import queryString from 'query-string';
import { VersionInterface, VersionGetQueryInterface } from 'interfaces/version';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVersions = async (query?: VersionGetQueryInterface): Promise<PaginatedInterface<VersionInterface>> => {
  const response = await axios.get('/api/versions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVersion = async (version: VersionInterface) => {
  const response = await axios.post('/api/versions', version);
  return response.data;
};

export const updateVersionById = async (id: string, version: VersionInterface) => {
  const response = await axios.put(`/api/versions/${id}`, version);
  return response.data;
};

export const getVersionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/versions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVersionById = async (id: string) => {
  const response = await axios.delete(`/api/versions/${id}`);
  return response.data;
};
