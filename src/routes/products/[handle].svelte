<script context="module">
 import {
   productDetails,
   productDetailsIsLoading,
   productDetailsError
 } from '../../store/store.js';
 import {
   fetchProductDetails
 } from '../../store/services.js';
 import ProductDetails from '../../components/ProductDetails.svelte';


 export async function load({ params }) {
   let handle = params.handle;
   await fetchProductDetails(handle);
   return {props: { productDetails }};
 };
</script>
<script>
 $: displayerError = JSON.stringify($productDetailsError);
</script>


<main class="product-page">
 {#if $productDetailsIsLoading }
 ...loading
 {:else if $productDetailsError}
   <b>{displayerError}</b>
 {:else}
   <ProductDetails product={$productDetails} />
 {/if}
</main>
