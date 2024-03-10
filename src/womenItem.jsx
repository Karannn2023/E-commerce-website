const womenItem = ({ item }) => {
  return (
    <>
      <div className="men_item_conatiner">
        <div className="men_item_img">{item.itemImage}</div>
        <div className="men_item_name">{item.itemName}</div>
        <div className="men_item_type">{item.itemType}</div>
        <div className="men_item_current">{item.itemCurrent}</div>
        <div className="men_item_original">{item.itemOriginal}</div>
        <div className="men_item_slogan">ONLY FEW LEFT!</div>
      </div>
    </>
  );
};
export default womenItem;
