<script>
	import '../app.postcss';
	import { base } from '$app/paths';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar w-full bg-base-300">
			<div class="flex-none hidden">
				<label for="my-drawer-3" class="btn-ghost btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16" /></svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2 font-bold">Engineshop Dashboard</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<!-- <!-- <li><a>Navbar Item 1</a></li> -->
					<li><a href="{base}/">Home</a></li>
				</ul>
			</div>
		</div>
		<!-- Page content here -->
		<div class="px-2 pt-4 md:px-8 md:pt-8 lg:px-20">
			<slot />
		</div>
		<!-- <footer class="footer footer-center mt-auto hidden bg-primary-content p-6 text-neutral md:block">
			<div>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="inline-block fill-current"
					><path
						d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
					/></svg
				>
				<p class="font-bold">
					PT. GMF Aero Asia Tbk. <br />Providing reliable airworthiness since 1992
				</p>
				<p>Copyright © 2022 - All right reserved</p>
			</div>
		</footer> -->
	</div>
	<!-- <div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu w-80 overflow-y-auto bg-base-100 p-4"> -->
	<!-- Sidebar content here
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li> -->
	<!-- </ul>
	</div> -->
</div>
