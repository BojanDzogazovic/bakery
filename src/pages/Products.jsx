import { useEffect } from "react";

export const Products = () => {
  const fetchUserData = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Id: "3e15b3ba-8606-4bff-aca8-18a3c4923ff6",
        Name: "radi",
        Price: "0",
      }),
    };
    fetch(
      "https://645d0d3c250a246ae316554c.mockapi.io/products/1",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="dashboard__content products">
      <h1>PRODUCTS</h1>
    </div>
  );
};
