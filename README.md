# tenbodies.site

A frontend for Angelica's site, using Shopify as a backend.

# Ingredients
We made this frontend usiong Svelte. You can learn more about svelte at https://svelte.dev
## Why svelte?
Svelte is the complex web framework that is closest to just writing HTML. It has a nice pattern 
for adding new pages to your site.  In your src/routes folder you just make a new .Svelte file and
that will turn into a route at that page.  the Svelte file can just be html if you pleae, or a more dynamic
style page.  So if you wanted `tenbodies.site/cool-birds` you'd just make a new file at `src/routes/cool-birds.svelte`.

It also has a style of writing CSS that is closes to how you already write CSS.

Svelte seemed a good balance of letting me do cool API calls to shopify and have a fully working ecommerce site, and
to have Angelica add whatever pages she wants to this as she pleases.

# The Site
shop.angblev.com is a catch all shop for Angelica's jewelry, yoga, music, and art.

It's main components right now are:
- a section for jewelry to buy online
- a section on yoga for yoga zines, class information, yoga thoughts, etc.
- a section for music where she shares mixes.

# Principles
1. The site should be easy for Angelica and myself to understand
2. It should be zippy and easy to use for Angblev fans
3. There should be no limitation on its design imposed by Shopify. The products
   can be wherever as the cart travels with you through the site.
4. We can easily add pages to the site just like we'd add pages to a traditional website.
