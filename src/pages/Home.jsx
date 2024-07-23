import { useState, useEffect, useRef } from "react";
import Product from "../components/Product";

function Home() {
  const [name, setName] = useState("Hope");
  const productRef = useRef(null);
  // useEffect(() => {
  //   previousInputValue.current = name;
  // }, [name]);
  const handleClick = () => {
    setName("nfnnf");
    console.log(productRef);
  };
  // const getProductValue = (value) => {
  //   setProductValue(value);
  // };
  return (
    <>
      <button onClick={handleClick}>CLICK</button>
      <h2>Current Value: {name}</h2>
      {/* <h2>Previous Value: {previousInputValue.current}</h2> */}
      <Product ref={productRef} />

      {/* {productRef.current.value} */}
    </>
  );
}

export default Home;
