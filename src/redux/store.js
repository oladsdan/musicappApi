import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamCoreApi } from './services/shazamCore';
// import { billBoardApi } from './services/BillboardApi';
// import { sportifyDataApi } from './services/SportifydataApi';


export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    // [billBoardApi.reducerPath]: billBoardApi.reducer,
    // [sportifyDataApi.reducerPath]: sportifyDataApi.reducer,
    player: playerReducer,
  },
   Middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
  // Middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat((shazamCoreApi.middleware), (billBoardApi.middleware))
  // Middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware).concat(billBoardApi.middleware)
});
