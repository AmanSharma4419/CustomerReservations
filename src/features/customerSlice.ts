import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface customerData {
name:string,
food:[]
}

interface customerState{
    val:customerData[]
}

const initialState:customerState = {
    val:[]
}

export const customerSlice = createSlice(
    {
        name:"customers",
        initialState,
        reducers: {
    addCustomer:(state ,action:PayloadAction<customerData>) => {
        state.val.push(action.payload)
    }
}
}
) 

export const  {addCustomer} = customerSlice.actions;
export default customerSlice.reducer;