<template>
  <header class="bg-surface/70 backdrop-blur sticky top-0 z-50 border-b border-divider">
    <nav class="container mx-auto px-6 sm:px-8 lg:px-10 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="mdi mdi-robot text-primary text-2xl" aria-hidden="true" />
        <span class="sr-only">Zendesk Demo Engineering</span>
        <span class="font-semibold text-on-surface">Demo Engineering</span>
      </div>
      <div class="flex items-center gap-3">
        <NuxtLink to="/#about" class="text-on-surface/80 hover:text-on-surface transition">About</NuxtLink>
        <NuxtLink to="/#resources" class="text-on-surface/80 hover:text-on-surface transition">Resources</NuxtLink>
        <CallToAction />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>