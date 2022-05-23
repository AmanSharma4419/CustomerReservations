import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

interface reservationData  {
    name: string,
    id:number
}
interface ReservationState  {
    val: reservationData[]
}

const initialState :ReservationState = {
    val:[]
}

export const reservationSlice = createSlice({
    name:"reservations",
    initialState,
    reducers:{
    addReservation:(state,action :PayloadAction<reservationData>) => {
    state.val.push(action.payload)
    },
    removeReservation:(state,action:PayloadAction<number>) => {
     const index =  state.val.findIndex(val => val.id === action.payload)        
     state.val.splice(index,1)   
 }

}
})

export const {addReservation,removeReservation}  = reservationSlice.actions;
export default reservationSlice.reducer;