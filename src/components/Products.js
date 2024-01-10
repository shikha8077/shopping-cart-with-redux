import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { useSelector } from "react-redux";
import { STATUSES } from "../store/productSlice";


function Products() {
//   const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(status ===  STATUSES.LOADING){
    return <h2>Loading.....</h2>
  }
  if(status ===  STATUSES.ERROR){
    return <h2>Error.....</h2>
  }

  return (
    <div className="productsWrrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
