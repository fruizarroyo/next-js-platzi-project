import FormProduct from "@components/FormProducts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import endPoints from "@services/api";

export default function Edit() {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const { id } = router.query;
    if (!router?.isReady) return;
    const getProduct = async () => {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    };
    getProduct();
  }, [router?.isReady]);
  return (
    <>
      <FormProduct product={product} />
    </>
  );
}
