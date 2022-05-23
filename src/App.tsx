import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import ReservationCard from "./components/reservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/customerCard";
function App() {
  interface userData {
    name: string;
    id: number;
  }
  const reservationsList = useSelector(
    (state: RootState) => state.reservations.val
  );
  const customerList = useSelector((state: RootState) => state.customers.val);
  const [userInput, handleUserInput] = useState<userData>({
    name: "",
    id: Date.now(),
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleUserInput({
      ...userInput,
      name: e.currentTarget.value,
      id: Date.now(),
    });
  };

  const handleAddReservation = () => {
    dispatch(addReservation(userInput));
    handleUserInput({ ...userInput, name: "" });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservationsList.map((info) => {
                return <ReservationCard id={info.id} name={info.name} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              placeholder="Name"
              value={userInput.name}
              onChange={handleChange}
              name="name"
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customerList.map((customer) => {
            return (
              <>
                <CustomerCard customer={customer.name} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
