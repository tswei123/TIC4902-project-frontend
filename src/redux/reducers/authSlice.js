import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedin: false,
    email: null,
    role: [],
    token: null,
  },
  reducers: {
    setLogin: (state, action) => {
      const {email, role, accessToken} = action.payload
      state.isLoggedin = true;
      state.email = email;
      state.role = role;
      state.token = accessToken;
    },
    setLogout: (state) => {
      state.isLoggedin = false ;
      state.email = null;
      state.role = [];
      state.token = null;
    },
  },
})

export const { setLogin,setLogout,setUsername,setEmail } = authSlice.actions

export const auth = (state) => state.auth.isLoggedin
export const role = (state) => state.auth.role[0]
export const useremail = (state) => state.auth.email
export const token = (state) => state.auth.token

export default authSlice.reducer