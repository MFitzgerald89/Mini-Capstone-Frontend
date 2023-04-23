export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onNewProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button className="btn btn-dark" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
