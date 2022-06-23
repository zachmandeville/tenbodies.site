<script>
 export let product;
 $: productLink = `/products/${product.handle}`
</script>

<div class='product-card'>
  <div class='product-card-frame'>
    <a href={productLink}>
      <img class='prodimg' src={product.images.edges[0].node.src} alt={product.handle}>
    </a>
  </div>
  <div class='product-card-text'>
    <h3 class='product-card-title'>
      {product.title}
    </h3>
    <p class='product-card-description'>
      {product.description.substring(0,60) + '...'}
    </p>
  <a href={productLink}>View item</a>
  </div>
</div>

<style>
 .product-card {
  max-width: 250px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}
.product-card-description {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.product-card-frame {
  height: 120px;
  margin-bottom: 0.5rem;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
}
.product-card-frame img {
  width: 100%;
  border-radius: 10px;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
}
.product-card-text {
  margin: 0.5rem 0;
}
 .product-card-title {
   margin: 0.5rem 0;
   font-weight: 700;
 }

</style>
