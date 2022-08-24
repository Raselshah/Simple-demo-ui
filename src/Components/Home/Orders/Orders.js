import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState("");
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserName = (userName) => {
    const user = users.filter((user) => user.user_id == userName);
    setUser(user[0].name);
  };
  console.log(user);

  return (
    <div className=" bg-blue-200/30">
      <div className="max-w-screen-2xl mx-auto px-12 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {orders
          .filter((order) => order.product_id == id)
          .map((o) => (
            <div
              key={o.order_id}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="linear"
              data-aos-duration="1500"
              class="card bg-base-100 shadow-xl"
            >
              <div class="card-body">
                <h2 class="card-title">Orders By : {o.user_id}</h2>
                <p>Order Date : {o.order_date}</p>
                <p>Order Date : quantity : {o.quantity}</p>
                <div class="card-actions justify-center">
                  <button
                    onClick={() => handleUserName(o.user_id)}
                    class="btn border-0 bg-green-600/40 hover:bg-blue-700/30 mt-2 cursor-pointer"
                  >
                    Order by user
                  </button>
                </div>
              </div>
            </div>
          ))}

        {user == "" ? (
          ""
        ) : (
          <div class="toast toast-top toast-end top-14">
            <div class="alert alert-success">
              <div>
                <span className="text-white">{user}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
