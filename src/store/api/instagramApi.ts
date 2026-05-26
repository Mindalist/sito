import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { InstagramProfile } from "./types";

export type { InstagramPost, InstagramProfile } from "./types";

export const instagramApi = createApi({
  reducerPath: "instagramApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://feeds.behold.so/",
  }),
  endpoints: (builder) => ({
    getInstagramFeed: builder.query<InstagramProfile, void>({
      query: () => "QlYxsiNKBnEghM6tzj4q",
    }),
  }),
});

export const { useGetInstagramFeedQuery } = instagramApi;

