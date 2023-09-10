import axios from 'axios';
import queryString from 'query-string';
import { MotifInterface, MotifGetQueryInterface } from 'interfaces/motif';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMotifs = async (query?: MotifGetQueryInterface): Promise<PaginatedInterface<MotifInterface>> => {
  const response = await axios.get('/api/motifs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMotif = async (motif: MotifInterface) => {
  const response = await axios.post('/api/motifs', motif);
  return response.data;
};

export const updateMotifById = async (id: string, motif: MotifInterface) => {
  const response = await axios.put(`/api/motifs/${id}`, motif);
  return response.data;
};

export const getMotifById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/motifs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMotifById = async (id: string) => {
  const response = await axios.delete(`/api/motifs/${id}`);
  return response.data;
};
