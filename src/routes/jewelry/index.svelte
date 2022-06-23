<script context='module'>
 import { fetchProducts } from '../../store/services.js';
 import { get } from 'svelte/store';
 import { productsIsLoading, productsError, products, jewelry} from '../../store/store.js'
 export async function load() {
   if (get(products).length === 0)  {
     await fetchProducts();
   }
   return {props: { productsIsLoading, productsError, products, jewelry }};
 };
</script>
<script>
 import ProductGrid from '../../components/ProductGrid.svelte';
 $: displayError = JSON.stringify($productsError);


</script>

  <h2>Jewelry</h2>
{#if $productsIsLoading}
  ...loading
  {:else if $productsError}
  <b>{displayError}</b>
  {:else}
  <ProductGrid products={$jewelry}/>
{/if}
