import "./ShoppingCart.css";

function ShoppingCart({
  isOpen,
  items,
  onCloseShoppingCart,
  onRemoveCartItem,
}) {
  const offCanvasClass = isOpen ? " show" : undefined;

  function handleClose() {
    if (onCloseShoppingCart) {
      onCloseShoppingCart();
    }
  }

  function handleRemove(id) {
    if (onRemoveCartItem) {
      onRemoveCartItem(id);
    }
  }

  return (
    <div
      className={`offcanvas offcanvas-end ${offCanvasClass}`}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Shopping Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={handleClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column gap-3">
          {items.map(({ id, imageUrl, title, price }) => (
            <div className="cart-item d-flex gap-2 align-items-center" key={id}>
              <img src={imageUrl} alt={title} />
              <h5>{title}</h5>
              <span className="badge text-bg-primary">${price}</span>
              <button
                className="btn btn-outline-danger btn-sm ms-auto"
                onClick={() => handleRemove(id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
