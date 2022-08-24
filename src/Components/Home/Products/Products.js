import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-green-200/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl mx-auto px-12 py-6 ">
        {products.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
            key={product.product_id}
            onClick={() => navigate(`/order/${product.product_id}`)}
            class="card bg-base-100 shadow-xl cursor-pointer border-2 border-green-300/50 hover:border-green-700/60  hover:bg-green-300/20 hover:shadow-2xl hover:shadow-green-600/70"
          >
            <div class="card-body">
              <h2 class="card-title text-green-600/70">{product?.name}</h2>
              <p>
                {" "}
                Selling Price:{" "}
                <span className="text-red-600/60 font-bold">
                  ${product?.selling_price}
                </span>
              </p>
              <p>
                {" "}
                stock :{" "}
                <span className="text-red-600/70 text-lg">
                  {product?.stock}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
