import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice( {
    name: 'user',
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: 'india',
        blogData: null,
    },

    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setSearchInput: (state,action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state,action) => {
            state.blogData = action.payload;
        },
    }
});


// exporting all 4 reducers...
export const {setSignedIn, setUserData, setSearchInput, setBlogData} = userSlice.actions;

// function to perform initialState..

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectSearchInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;


export default userSlice.reducer;

