import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<{ data: Post[]; totalPages: number }, number | void>({
            query: (page = 1) => `/posts?_page=${page}&_limit=6`,
            transformResponse: (response: Post[], meta) => {
                const totalCount = Number(meta?.response?.headers.get('X-Total-Count') || 0);
                const totalPages = Math.ceil(totalCount / 6);
                return { data: response, totalPages };
            },
        }),
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
        addPost: builder.mutation<Post, Partial<Post>>({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation} = postsApi;
