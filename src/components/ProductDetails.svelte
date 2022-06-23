<script>
 export let product;
 let productImage = product.images.edges[0].node.src;
 let productVariants = product.variants.edges.map(v => v.node);
 let selectedProduct = productVariants[0].id;

 const price = (itemPrice) => {
   const amount = Number(itemPrice).toFixed(2);
   return `${amount} NZD`;
 };
</script>

  <article>
        <section class="product-page-content">
            <h1>{product.title}</h1>
            <div>
                <img class="product-page-image" src={productImage} alt={product.handle} />
            </div>
            <div>
                <p>{product.description}</p>
                <form>
                    {#if productVariants.length > 1}
                        <div class="product-page-price-list">
                            {#each productVariants as { id, quantityAvailable, title, priceV2 }}
                                <div class="product-page-price">
                                    <input
                                        {id}
                                        bind:value={selectedProduct}
                                        type="radio"
                                        name="merchandiseId"
                                        disabled={quantityAvailable === 0}
                                    />
                                    <label for={id}>
                                        {title} - {price(priceV2.amount)}
                                    </label>
                                </div>
                            {/each}
                        </div>
                    {:else}
                        <div class="product-page-price is-solo">
                            {price(productVariants[0].priceV2.amount)}
                        </div>
                    {/if}
                    <!-- <div class="product-page-quantity-row">
                         <input
                         class="product-page-quantity-input"
                         type="number"
                         name="quantity"
                         min="1"
                         max={productVariants[0].quantityAvailable}
                         bind:value={quantity}
                         />
                         <button type="submit" on:click|preventDefault={addToCart} class="button purchase">
                         Add to Cart
                         </button>
                         </div> -->
                </form>
            </div>
        </section>
  </article>

  <style>
   img {
     width: 100%;
   }
  </style>
