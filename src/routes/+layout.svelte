<script lang="ts">
	import Footer from "$lib/ui/footer/Footer.svelte";
	import Header from "$lib/header/Header.svelte";
	import Main from "$lib/main/Main.svelte";
	import type {LayoutData} from "./$types.js";
	export let data: LayoutData;
</script>

<div class="svelte-app-root">
	<Header currentUser={data.currentUser} />
	<Main>
		<slot />
	</Main>
	<Footer />
</div>

<style lang="scss" global>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		font-family: "Lato", "sans-serif";
		margin: 0;
		font-family: "Poppins", sans-serif;
		background-color: var(--gray-7);
	}
	html {
		min-height: 100%;
	}
	html,
	body,
	.sveltekit-body,
	.svelte-app-root {
		display: grid;
	}
	.svelte-app-root {
		grid-template-rows: auto 1fr auto;
	}
	:root {
		--primary-color-0: hsl(234, 36%, 0%);
		--primary-color-1: hsl(234, 36%, 16%);
		--primary-color-2: hsl(234, 36%, 32%);
		--primary-color-3: hsl(234, 36%, 47%);
		--primary-color-4: hsl(234, 36%, 59%);
		--primary-color-5: hsl(234, 36%, 69%);
		--primary-color-6: hsl(234, 36%, 80%);
		--primary-color-7: hsl(234, 36%, 90%);
		--primary-color-8: hsl(234, 36%, 100%);
		--purple-0: hsl(264, 36%, 0%);
		--purple-1: hsl(264, 36%, 15%);
		--purple-2: hsl(264, 36%, 30%);
		--purple-3: hsl(264, 36%, 45%);
		--purple-4: hsl(264, 36%, 57%);
		--purple-5: hsl(264, 36%, 68%);
		--purple-6: hsl(264, 36%, 79%);
		--purple-7: hsl(264, 36%, 89%);
		--purple-8: hsl(264, 36%, 100%);
		--secondary-color-0: hsl(294, 36%, 0%);
		--secondary-color-1: hsl(294, 36%, 13%);
		--secondary-color-2: hsl(294, 36%, 26%);
		--secondary-color-3: hsl(294, 36%, 39%);
		--secondary-color-4: hsl(294, 36%, 51%);
		--secondary-color-5: hsl(294, 36%, 64%);
		--secondary-color-6: hsl(294, 36%, 76%);
		--secondary-color-7: hsl(294, 36%, 88%);
		--secondary-color-8: hsl(294, 36%, 100%);

		--blue-0: hsl(234, 36%, 0%);
		--blue-1: hsl(234, 36%, 16%);
		--blue-2: hsl(234, 36%, 32%);
		--blue-3: hsl(234, 36%, 47%);
		--blue-4: hsl(234, 36%, 59%);
		--blue-5: hsl(234, 36%, 69%);
		--blue-6: hsl(234, 36%, 80%);
		--blue-7: hsl(234, 36%, 90%);
		--blue-8: hsl(234, 36%, 100%);
		--purple-0: hsl(264, 36%, 0%);
		--purple-1: hsl(264, 36%, 15%);
		--purple-2: hsl(264, 36%, 30%);
		--purple-3: hsl(264, 36%, 45%);
		--purple-4: hsl(264, 36%, 57%);
		--purple-5: hsl(264, 36%, 68%);
		--purple-6: hsl(264, 36%, 79%);
		--purple-7: hsl(264, 36%, 89%);
		--purple-8: hsl(264, 36%, 100%);
		--magenta-0: hsl(294, 36%, 0%);
		--magenta-1: hsl(294, 36%, 13%);
		--magenta-2: hsl(294, 36%, 26%);
		--magenta-3: hsl(294, 36%, 39%);
		--magenta-4: hsl(294, 36%, 51%);
		--magenta-5: hsl(294, 36%, 64%);
		--magenta-6: hsl(294, 36%, 76%);
		--magenta-7: hsl(294, 36%, 88%);
		--magenta-8: hsl(294, 36%, 100%);
		--pink-0: hsl(324, 36%, 0%);
		--pink-1: hsl(324, 36%, 13%);
		--pink-2: hsl(324, 36%, 26%);
		--pink-3: hsl(324, 36%, 39%);
		--pink-4: hsl(324, 36%, 52%);
		--pink-5: hsl(324, 36%, 65%);
		--pink-6: hsl(324, 36%, 77%);
		--pink-7: hsl(324, 36%, 89%);
		--pink-8: hsl(324, 36%, 100%);
		--red-0: hsl(354, 36%, 0%);
		--red-1: hsl(354, 36%, 14%);
		--red-2: hsl(354, 36%, 27%);
		--red-3: hsl(354, 36%, 41%);
		--red-4: hsl(354, 36%, 54%);
		--red-5: hsl(354, 36%, 66%);
		--red-6: hsl(354, 36%, 78%);
		--red-7: hsl(354, 36%, 89%);
		--red-8: hsl(354, 36%, 100%);
		--orange-0: hsl(24, 36%, 0%);
		--orange-1: hsl(24, 36%, 12%);
		--orange-2: hsl(24, 36%, 24%);
		--orange-3: hsl(24, 36%, 36%);
		--orange-4: hsl(24, 36%, 48%);
		--orange-5: hsl(24, 36%, 61%);
		--orange-6: hsl(24, 36%, 74%);
		--orange-7: hsl(24, 36%, 87%);
		--orange-8: hsl(24, 36%, 100%);
		--yellow-0: hsl(54, 36%, 0%);
		--yellow-1: hsl(54, 36%, 10%);
		--yellow-2: hsl(54, 36%, 20%);
		--yellow-3: hsl(54, 36%, 30%);
		--yellow-4: hsl(54, 36%, 40%);
		--yellow-5: hsl(54, 36%, 50%);
		--yellow-6: hsl(54, 36%, 67%);
		--yellow-7: hsl(54, 36%, 84%);
		--yellow-8: hsl(54, 36%, 100%);
		--lime-0: hsl(84, 36%, 0%);
		--lime-1: hsl(84, 36%, 10%);
		--lime-2: hsl(84, 36%, 21%);
		--lime-3: hsl(84, 36%, 31%);
		--lime-4: hsl(84, 36%, 41%);
		--lime-5: hsl(84, 36%, 52%);
		--lime-6: hsl(84, 36%, 69%);
		--lime-7: hsl(84, 36%, 84%);
		--lime-8: hsl(84, 36%, 100%);
		--green-0: hsl(114, 36%, 0%);
		--green-1: hsl(114, 36%, 11%);
		--green-2: hsl(114, 36%, 22%);
		--green-3: hsl(114, 36%, 33%);
		--green-4: hsl(114, 36%, 44%);
		--green-5: hsl(114, 36%, 57%);
		--green-6: hsl(114, 36%, 72%);
		--green-7: hsl(114, 36%, 86%);
		--green-8: hsl(114, 36%, 100%);
		--turquoise-0: hsl(144, 36%, 0%);
		--turquoise-1: hsl(144, 36%, 11%);
		--turquoise-2: hsl(144, 36%, 22%);
		--turquoise-3: hsl(144, 36%, 33%);
		--turquoise-4: hsl(144, 36%, 44%);
		--turquoise-5: hsl(144, 36%, 57%);
		--turquoise-6: hsl(144, 36%, 72%);
		--turquoise-7: hsl(144, 36%, 86%);
		--turquoise-8: hsl(144, 36%, 100%);
		--cyan-0: hsl(174, 36%, 0%);
		--cyan-1: hsl(174, 36%, 11%);
		--cyan-2: hsl(174, 36%, 21%);
		--cyan-3: hsl(174, 36%, 32%);
		--cyan-4: hsl(174, 36%, 42%);
		--cyan-5: hsl(174, 36%, 54%);
		--cyan-6: hsl(174, 36%, 70%);
		--cyan-7: hsl(174, 36%, 85%);
		--cyan-8: hsl(174, 36%, 100%);
		--azure-0: hsl(204, 36%, 0%);
		--azure-1: hsl(204, 36%, 13%);
		--azure-2: hsl(204, 36%, 25%);
		--azure-3: hsl(204, 36%, 37%);
		--azure-4: hsl(204, 36%, 50%);
		--azure-5: hsl(204, 36%, 63%);
		--azure-6: hsl(204, 36%, 75%);
		--azure-7: hsl(204, 36%, 88%);
		--azure-8: hsl(204, 36%, 100%);
		--gray-0: hsl(0, 0%, 0%);
		--gray-1: hsl(0, 0%, 12%);
		--gray-2: hsl(0, 0%, 25%);
		--gray-3: hsl(0, 0%, 37%);
		--gray-4: hsl(0, 0%, 50%);
		--gray-5: hsl(0, 0%, 63%);
		--gray-6: hsl(0, 0%, 75%);
		--gray-7: hsl(0, 0%, 88%);
		--gray-8: hsl(0, 0%, 100%);
	}
</style>
