import Axios from 'axios';

export const fetchUsers = async (perPage: number): Promise<unknown> =>
  await Axios.get(`https://api.github.com/users?per_page=${perPage}`);

export const fetchFollowers = async (
  perPageFollowers: number,
  name: string,
): Promise<unknown> =>
  await Axios.get(
    `https://api.github.com/users/${name}/followers?per_page=${perPageFollowers}`,
  );
