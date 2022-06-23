<script context="module">
 import { fetchProducts } from '../store/services.js';
 import { get } from 'svelte/store';
 import { productsIsLoading, productsError, products } from '../store/store.js'
 export async function load() {
   if (get(products).length === 0)  {
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


<p>Hey, I think you are {niceThing}</p>
<button on:click={() => counter++}>another</button>

<h2>For Chica:</h2>
<p>This is a baaaaarebones custom storefront for you. It is pulling data live
  from your shopify site, but we can put the data wherever we want however we
  wnat in this site.</p>

<p>It...clearly isn't finished yet. There isn't a cart,
  though I've built a simple cart in my tester app before this one, so I know I
  can do it using this code. Mostly I wanted to play with the cart when I could
  put in orders on yr site and not freak you out.</p>

<p>With this though you
  can go down to "shopify lite", which is 9$ a month, and this frontend which is
  freee. We can buy so many wrestling shirts with the savingers per month from this</p>

<p>Also, this gift comes
  with continued development and support. Whenever you'd like these upcoming
  weeks, let's translate your designs into the <em>real</em> tenbodies.site.</p>

<p>love you,</p>
<p><b>ZACH!</b></p>
