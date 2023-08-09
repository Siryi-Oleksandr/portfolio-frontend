import { instance } from '../../redux/auth/operations';

export const fetchUsers = async (query: string, page: number) => {
  try {
    const response = await instance.get(
      `/?query=${query}&page=${page}&limit=2`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const fetchProjects = async (query: string, page: number) => {
  try {
    const response = await instance.get(
      `/projects/query/?query=${query}&page=${page}&limit=2`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
