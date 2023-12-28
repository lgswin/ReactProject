import { useEffect, useRef } from "react";
import { useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const hasFetched = useRef(false);

  async function fetchProducts() {
    try {
      console.log("fetchProducts");
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!hasFetched.current) {
      console.log("call fetchProducts");
      fetchProducts();
      hasFetched.current = true;
    }
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);

    // scroll to bottom of products list
    if (products.length > 0) {
      const lastLoadedProduct = document.querySelector(".product:last-child");
      if (lastLoadedProduct) {
        lastLoadedProduct.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => {
            hasFetched.current = false;
            setCount(count + 1);
          }}
        >
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
