import MenItems from "./menItems";
import MenItemContainer from "./menItemContainer";
const men = () => {
  return (
    <>
      <div className="men_container">
        {MenItemContainer.map((items) => (
          <MenItems key={items.itemId} item={items} />
        ))}
      </div>
    </>
  );
};
export default men;
