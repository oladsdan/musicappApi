
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c',
//       'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// using redux-tooltick
export const shazamCoreApi= createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core7.p.rapidapi.com",
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key', '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c')

            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: '/charts/get-top-songs-in-world'})
    })
})