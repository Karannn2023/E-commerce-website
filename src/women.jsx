import WomenItem from "./womenItem";
import WomenItemContainer from "./womenItemContainer";
const women = () => {
  return (
    <>
      <div className="men_container">
        {WomenItemContainer.map((items) => (
          <WomenItem key={items.itemId} item={items} />
        ))}
      </div>
    </>
  );
};
export default women;
