import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"David Coombs"})
            state.push({name:"Dan Smith"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;