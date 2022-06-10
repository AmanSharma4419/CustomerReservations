interface Props {
  customer: string;
}
const CustomerCard = ({ customer }: Props) => {
  return (
    <div className="customer-food-card-container">
      <p>{customer}</p>
    </div>
  );
};

export default CustomerCard;
