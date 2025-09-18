<template>
  <div class="rounded-2xl border border-divider bg-surface shadow-card p-6">
    <header v-if="$slots.header" class="border-b border-divider pb-3 mb-4">
      <slot name="header" />
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/* Minimal reusable card with shadcn-like spacing & border */
</script>