<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	interface Project {
		title: string;
		img: string;
		description: string;
		extraDescription: string;
	}

	let projects: Project[] = [
		{
			title: 'Minecraft',
			img: '',
			description: 'I totally made this!',
			extraDescription: 'P.S: I did not actually make this.'
		},
		{
			title: 'Terraria',
			img: '',
			description: 'I totally made this!',
			extraDescription: 'P.S: I did not actually make this.'
		}
	];

	let hiddenFull: HTMLElement | null = null;

	let hasJustSelected = false;
	let lastSelectedProject: Project | null = null;
	let selectedProject: Project | null = null;
	const selectedLeft = tweened(0, { duration: 500, easing: cubicOut });
	const selectedTop = tweened(0, { duration: 500, easing: cubicOut });
	const selectedWidth = tweened(0, { duration: 500, easing: cubicOut });
	const selectedHeight = tweened(0, { duration: 500, easing: cubicOut });
	const selectedOpacity = tweened(0.0, { duration: 500, easing: cubicOut });
	const gridOpacity = tweened(1.0, { duration: 500, easing: cubicOut });

	async function onProjectSelect(e: any, project: Project) {
		hasJustSelected = true;
		lastSelectedProject = selectedProject;
		selectedProject = project;

		let target: HTMLElement = e.target;
		let parentElement: HTMLElement | null = target.parentElement;
		while (target.nodeName !== 'ARTICLE' && parentElement) {
			target = parentElement;
			parentElement = target.parentElement;
		}

		let left = target.offsetLeft;
		let top = target.offsetTop;
		let width = target.offsetWidth;
		let height = target.offsetHeight;

		selectedLeft.set(left, { duration: 0 });
		selectedTop.set(top, { duration: 0 });
		selectedWidth.set(width, { duration: 0 });
		selectedHeight.set(height, { duration: 0 });
		selectedLeft.set(0);
		selectedTop.set(0);
		if (parentElement && hiddenFull) {
			selectedWidth.set(parentElement.offsetWidth);
			await tick();
			selectedHeight.set(hiddenFull.offsetHeight);
		}
		selectedOpacity.set(1.0, { duration: 0 });
		gridOpacity.set(0.0);
	}

	function onProjectDeselect(e: any) {
		if (hasJustSelected) {
			hasJustSelected = false;
		} else {
			let isFull = false;
			let target: HTMLElement = e.target;
			while (true) {
				if (target.className.startsWith('full')) {
					isFull = true;
					break;
				} else if (!target.parentElement) {
					break;
				}
				target = target.parentElement;
			}

			if (!isFull) {
				lastSelectedProject = selectedProject;
				selectedProject = null;

				selectedOpacity.set(0.0);
				selectedTop.set(-$selectedHeight * 2, { duration: 1000 });
				gridOpacity.set(1.0);
			}
		}
	}

	onMount(() => {
		hiddenFull = document.getElementById('hidden-full');
		document.onclick = onProjectDeselect;
	});
</script>

<div class="container">
	<div class="grid absolute" style="opacity: {$gridOpacity};">
		{#each projects as project}
			{#if project !== selectedProject}
				<article
					class="preview"
					on:click={(e) => onProjectSelect(e, project)}
					on:keydown={() => {}}
				>
					<h1>{project.title}</h1>
					<p>{project.description}</p>
				</article>
			{:else}
				<article
					class="preview"
					on:click={(e) => onProjectSelect(e, project)}
					on:keydown={() => {}}
					style="visibility: hidden;"
				>
					<h1>{project.title}</h1>
					<p>{project.description}</p>
				</article>
			{/if}
		{/each}
	</div>

	<article
		class="full"
		style="
        top: {$selectedTop}px; left: {$selectedLeft}px;
        width: {$selectedWidth}px; height: {$selectedHeight}px;
        opacity: {$selectedOpacity};
    "
	>
		{#if selectedProject}
			<h1>{selectedProject.title}</h1>
			<p>{selectedProject.description}</p>
			<p>{selectedProject.extraDescription}</p>
		{/if}
	</article>

	<article id="hidden-full" style="visibility: hidden;">
		{#if selectedProject}
			<h1>{selectedProject.title}</h1>
			<p>{selectedProject.description}</p>
			<p>{selectedProject.extraDescription}</p>
		{/if}
	</article>
</div>

<style lang="scss">
	@import '../variables.scss';
	@import '../default.scss';

	.container {
		position: relative;
	}

	article {
		padding: $medium-size;
		border-radius: $medium-size;
		background-color: $black;
		color: $white;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
		gap: $medium-size;

		&.absolute {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
		}
	}

	.preview {
		cursor: pointer;
	}

	.full {
		position: absolute;
		max-width: 100%;
		overflow-y: hidden;
	}
</style>
