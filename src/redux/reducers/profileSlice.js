import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    email: null,
    username: null,
    address: null,
    contact: null,
  },
  reducers: {
    setProfile: (state, action) => {
      const {email, username, address, contact} = action.payload
      state.email = email;
      state.username = username;
      state.address = address;
      state.contact = contact;
    },
  },
})

export const { setProfile } = profileSlice.actions

export const email = (state) => state.profile.email
export const username = (state) => state.profile.username
export const address = (state) => state.profile.address 
export const contact = (state) => state.profile.contact
export const profile = (state) => state.profile

export default profileSlice.reducer