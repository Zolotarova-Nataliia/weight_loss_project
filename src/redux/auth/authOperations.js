import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersAPI from '../../services/users-api';
import { toast } from 'react-toastify';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.registerUser(credentials);
      return response;
    } catch (error) {
      toast.error('We already have a user with such email.');
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.logInUser(credentials);
      return response;
    } catch (error) {
      toast.error('Email or password is incorrect.');
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await usersAPI.logOutUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.users.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    const response = await usersAPI.currentUserRefresh(persistedToken);
    return response;
  }
);