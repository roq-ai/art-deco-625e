import axios from 'axios';
import queryString from 'query-string';
import { ColorPaletteInterface, ColorPaletteGetQueryInterface } from 'interfaces/color-palette';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getColorPalettes = async (
  query?: ColorPaletteGetQueryInterface,
): Promise<PaginatedInterface<ColorPaletteInterface>> => {
  const response = await axios.get('/api/color-palettes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createColorPalette = async (colorPalette: ColorPaletteInterface) => {
  const response = await axios.post('/api/color-palettes', colorPalette);
  return response.data;
};

export const updateColorPaletteById = async (id: string, colorPalette: ColorPaletteInterface) => {
  const response = await axios.put(`/api/color-palettes/${id}`, colorPalette);
  return response.data;
};

export const getColorPaletteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/color-palettes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteColorPaletteById = async (id: string) => {
  const response = await axios.delete(`/api/color-palettes/${id}`);
  return response.data;
};
