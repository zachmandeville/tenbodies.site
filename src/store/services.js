import {
  requestProducts,
  receiveProductsSuccess,
  receiveProductsError,
  requestProductDetails,
  receiveProductDetailsSuccess,
  receiveProductDetailsError
} from './store.js'

import {
  postToShopify
} from '../routes/api/utils/postToShopify';

import {
 getAllProducts,
 getProduct
} from '../queries';

export const fetchProducts = async () => {
  try {
    requestProducts();
    // @ts-ignore
    const shopifyResponse = await postToShopify({
      query: getAllProducts
    });
    receiveProductsSuccess(shopifyResponse.products.edges);
  } catch (error) {
    receiveProductsError(error);
  }
};

export const fetchProductDetails = async (handle) => {
  try {
    requestProductDetails();
    const shopifyResponse = await postToShopify({
      query: getProduct,
      variables: {
        handle: handle,
      },
    });
    receiveProductDetailsSuccess(shopifyResponse.productByHandle);
  } catch (error) {
    receiveProductDetailsError(error);
  }
};
