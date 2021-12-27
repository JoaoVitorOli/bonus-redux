import { useEffect, useState } from "react";

import { api } from "../services/api";

import { IProduct } from "../store/modules/cart/types";
import { CatalogItem } from "./CatalogItem";

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadCatalog() {
      const response = await api.get("products");

      setCatalog(response.data);
    }

    loadCatalog();
  }, []);

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </>
  );
}
