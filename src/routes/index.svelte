<script context="module">
 import { fetchProducts } from '../store/services.js';
 import { get } from 'svelte/store';
 import { productsIsLoading, productsError, products } from '../store/store.js'
 export async function load() {
   const productsLoaded = () => get(products).length > 0;
   if (!productsLoaded())  {
     await fetchProducts();
   }
   return {props: { productsIsLoading, productsError, products }};
 };
</script>

<script>
 import ProductGrid from '../components/ProductGrid.svelte';

 let niceThings = ["fun", "cool", "good", "sweet"];
 let counter = 1;

 $: displayError = JSON.stringify($productsError);
 $: niceThing = niceThings[counter % niceThings.length]
</script>

<h2>jewelry & Art & etc</h2>
<p>Talismans charged up with magic mantra, clothing, art + etc handmade in Aotearoa by Angelica Blevins.</p>

<nav>
  <ul>
    <li><a href="/jewelry">Check out the jewelry</a></li>
    <li><a href="/music">Listen to a mix</a></li>
    <li><a href="/yoga">Learn about my yoga practice and classes</a></li>
  </ul>
</nav>
{#if $productsIsLoading}
  ...loading
  {:else if $productsError}
  <b>{displayError}</b>
  {:else}
  <ProductGrid products={$products}/>
{/if}


<p>Hey, I think you are {niceThing}</p>
<button on:click={() => counter++}>another</button>
