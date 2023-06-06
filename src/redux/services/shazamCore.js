
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


export const shazamCoreApi= createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c')

            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/track'}),
        // getSongRelated: builder.query({query : ({songid}) => `/songs/list-recommendations?id=${songid}`})
        // getArtistDetails: builder.query({query : (artistId) => `/artist/get-details?id=${artistId}`})
        

    })
})

export const shazamSongApi= createApi({
    reducerPath: 'shazamSongApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core7.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c')

            return headers
        },
    }),
    endpoints: (builder) => ({
        getSongDetails: builder.query({query: ({ songid }) => `/songs/get_details?id=${songid}`}),
        // getSongRelated: builder.query({query: ({ songid}) => `/songs/get-related-artist?id=${songid}`})
        getSongRelated: builder.query({query : ({songid}) => `/songs/list-recommendations?id=${songid}`}),
        getArtistDetails: builder.query({query : (artistId) => `/artist/get-details?id=${artistId}`}),
        getArtistTopSongs: builder.query({query :(artistId) =>  `/artist/get-top-songs?id=${artistId}`})

    })
})
export const { useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetArtistTopSongsQuery } = shazamSongApi




export const {
    useGetTopChartsQuery
} = shazamCoreApi