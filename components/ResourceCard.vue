<template>
  <a
    :href="href || '#'"
    class="block rounded-2xl border border-divider bg-surface p-5 hover:shadow-elevated hover:-translate-y-0.5 transition"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
  >
    <div class="flex items-center gap-3 mb-3">
      <span class="mdi text-2xl text-accent" :class="icon" aria-hidden="true" />
      <h3 class="font-semibold text-on-surface">{{ title }}</h3>
    </div>
    <p class="text-sm text-on-surface/80">{{ description }}</p>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
}>();
</script>