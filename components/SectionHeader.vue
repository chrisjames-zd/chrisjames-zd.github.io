<template>
  <div class="space-y-2">
    <div v-if="eyebrow" class="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
      <span class="mdi mdi-information-outline" aria-hidden="true" />
      {{ eyebrow }}
    </div>
    <h2 class="text-2xl sm:text-3xl font-bold text-on-surface">{{ title }}</h2>
    <p v-if="subtitle" class="text-on-surface/80 max-w-prose">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}>();
</script>