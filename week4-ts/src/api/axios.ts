import axios from "axios";

export const getUserInfo = async (username: string) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
