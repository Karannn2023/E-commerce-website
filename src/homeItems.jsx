const homeItems = ({ items }) => {
  return (
    <>
      <div className="item_conatiner">
        <div className="item_img">{items.itemImage}</div>
        <div className="item_name">{items.itemName}</div>
        <div className="item_discount">{items.itemDiscount}</div>
        <div className="item_slogan">SHOP NOW</div>
      </div>
    </>
  );
};
export default homeItems;
