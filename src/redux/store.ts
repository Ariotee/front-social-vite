import { configureStore } from '@reduxjs/toolkit';
import post from './posts/slice';

export const store = configureStore({
	reducer: {
		post,
	},
});
