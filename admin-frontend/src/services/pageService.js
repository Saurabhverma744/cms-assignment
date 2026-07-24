import api from "./api";
import { getToken } from "../utils/auth";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getPages = async () => {
  const response = await api.get("/pages");
  return response.data;
};

export const createPage = async (page) => {
  const response = await api.post("/pages", page, authHeader());
  return response.data;
};

export const getPageById = async (id) => {
  const response = await api.get(`/pages/${id}`);
  return response.data;
};

export const updatePage = async (id, page) => {
  const response = await api.put(`/pages/${id}`, page, authHeader());
  return response.data;
};

export const deletePage = async (id) => {
  const response = await api.delete(`/pages/${id}`, authHeader());
  return response.data;
};

export const getPageBySlug = async (slug) => {
  const response = await api.get(`/pages/slug/${slug}`);
  return response.data;
};
