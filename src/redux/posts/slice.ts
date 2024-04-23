import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from './types';

const initialState: IPost = {
	id: '',
	userId: '',
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		createPost(state, action: PayloadAction<string>) {
			state.id = action.payload;
		},
	},
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
