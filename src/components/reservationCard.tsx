import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";

interface Props {
  name: string;
  id: number;
}

const ReservationCard = ({ name, id }: Props) => {
  const dispatch = useDispatch();

  const removeReservationData = (id: number) => {
    dispatch(removeReservation(id));
  };
  const addCustomerData = (name: string) => {
    dispatch(addCustomer({ name: name, food: [] }));
  };
  return (
    <div
      onClick={() => {
        removeReservationData(id);
        addCustomerData(name);
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
