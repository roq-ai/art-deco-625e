import axios from 'axios';
import queryString from 'query-string';
import { DesignInterface, DesignGetQueryInterface } from 'interfaces/design';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDesigns = async (query?: DesignGetQueryInterface): Promise<PaginatedInterface<DesignInterface>> => {
  const response = await axios.get('/api/designs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDesign = async (design: DesignInterface) => {
  const response = await axios.post('/api/designs', design);
  return response.data;
};

export const updateDesignById = async (id: string, design: DesignInterface) => {
  const response = await axios.put(`/api/designs/${id}`, design);
  return response.data;
};

export const getDesignById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/designs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDesignById = async (id: string) => {
  const response = await axios.delete(`/api/designs/${id}`);
  return response.data;
};
