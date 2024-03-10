import HomeImage from "./homeImage";
import HomeItems from "./homeItems";
import HomeItemContainer from "./homeItemContainer";
import Strip from "./strip";
import Carasoul from "./carasoul";
const home = () => {
  return (
    <>
      <Strip />
      <HomeImage />
      <div className="container">
        {HomeItemContainer.map((item) => (
          <HomeItems key={item.itemId} items={item} />
        ))}
      </div>
      <Carasoul />
    </>
  );
};
export default home;
