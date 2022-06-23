<script>
 import ProductCard from './ProductCard.svelte';
 export let products;
 console.log({ products })
</script>

<section class='product-grid'>
  {#each products as product}
    <ProductCard product={product.node} />
  {/each}
</section>

<style>
 .product-grid {
   max-width: 60vw;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 40px;
   grid-row-gap: 0;
 }
</style>
