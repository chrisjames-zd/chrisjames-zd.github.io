<template>
  <div class="flex items-center gap-3 rounded-lg border border-divider px-3 py-2 hover:bg-accent/5 transition">
    <span :class="['mdi', icon, 'text-accent text-xl']" aria-hidden="true" />
    <span class="text-on-surface/90">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ icon: string; title: string }>();
</script>
