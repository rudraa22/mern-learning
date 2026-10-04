function ProductCard({ id, name, price, onDelete, onEdit }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ProductCard;