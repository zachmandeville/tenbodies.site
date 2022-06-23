// @ts-nocheck
import { writable, derived } from "svelte/store";

export const productsIsLoading = writable(false);
export const productsError = writable(null);
export const products = writable([]);

export const requestProducts = () =>
  productsIsLoading.set(true);
export const receiveProductsSuccess = (data) => {
  console.log("Received Products: ", data)
  products.set(data);
  productsIsLoading.set(false);
};
export const receiveProductsError = (error) => {
  console.log("Error receiving products: ", error);
  productsError.set(error);
  productsIsLoading.set(false);
};


export const productDetailsError = writable(null);
export const productDetailsIsLoading = writable(false);
export const productDetails = writable([]);

export const requestProductDetails = () =>
  productDetailsIsLoading.set(true);
export const receiveProductDetailsSuccess = (data) => {
  console.log("received product details", {data})
  productDetails.set(data);
  productDetailsIsLoading.set(false);
}
export const receiveProductDetailsError = (error) => {
  console.log("Error receiving product details: ", error)
  productsError.set(error);
  productsIsLoading.set(false);
}

export const jewelry = derived(products, $ps => {
  return $ps.filter(({node}) => node.productType !== "Clothing")
});
