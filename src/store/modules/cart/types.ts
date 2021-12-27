export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItems {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItems[];
  failedStockCheck: number[];
}