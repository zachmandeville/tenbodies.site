<script>
 import Header from '../components/header.svelte';
 let fun = "cool"
 let niceThings = ["fun", "cool", "good", "sweet"];
 let counter = 1;
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
