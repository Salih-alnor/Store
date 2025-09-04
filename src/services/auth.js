import api from "../api/api";

export const login = async ({ email, password }) => {
  try {
    const response = await api.post("/auth/login", { email, password });

    const { token, user, status, message } = response.data;
    if (token) {
      localStorage.setItem("token", token);
    }
    if (user) {
      localStorage.setItem("user_informition", JSON.stringify(user));
    }

    return { token, user, status, message };
  } catch (error) {
    throw error;
  }
};

// const Register = async({email}) => {
//     try {

//     } catch (error) {
//        throw error
//     }
// }
