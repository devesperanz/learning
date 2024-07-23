import { forwardRef, useImperativeHandle, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Product = forwardRef((props, ref) => {
  const d = "nfnn";

  useImperativeHandle(
    ref,
    () => ({
      name: d,
      nfnf: "ndn",
    }),
    [d]
  );

  const phone = useContext(AppContext);

  return (
    <>
      <h1>PRODUCT</h1>
      <p>Phone: {phone} </p>
    </>
  );
});

export default Product;
