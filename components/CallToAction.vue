<template>
	<div class="flex items-center gap-3">
		<NuxtLink to="https://google.com" class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90" target="_blank">
			<span class="mdi mdi-rocket-launch" aria-hidden="true" />
			Get Demo Studio
		</NuxtLink>

		<NuxtLink to="https://google.com" class="inline-flex items-center gap-2 px-4 py-2 border border-divider rounded-lg text-sm font-medium text-on-surface/90 hover:bg-accent/5" target="_blank">
			<span class="mdi mdi-email-outline" aria-hidden="true" />
			Request access
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
// simple presentational component — no props required
</script>
