<script>
  import "../app.css";
	import TopNav from "./TopNav.svelte";
	import FrontFooter from "./FrontFooter.svelte";
	import 'iconify-icon'
</script>


<div class="flex flex-col min-h-screen text-white bg-background">
	<TopNav />
	<div class="grow bg-background pt-20">
		<slot />
	</div>
	<FrontFooter />

</div>