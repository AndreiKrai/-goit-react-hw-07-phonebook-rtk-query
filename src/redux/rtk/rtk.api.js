import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reduserPath: 'rtk-contact',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://637b964c10a6f23f7fad9ea0.mockapi.io/contacts/contacts/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/' }),
    }),
  }),
});

export const { useGetContactsQuery } = contactApi;
