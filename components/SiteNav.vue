<template>
  <header class="bg-surface/70 backdrop-blur sticky top-0 z-50 border-b border-divider">
    <nav class="container mx-auto px-6 sm:px-8 lg:px-10 py-3 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white font-bold text-sm group-hover:opacity-90 transition">
          CJ
        </span>
        <span class="font-semibold text-on-surface hidden sm:inline">Chris James</span>
      </NuxtLink>
      <div class="flex items-center gap-5">
        <NuxtLink to="/#about" class="text-on-surface/80 hover:text-on-surface transition text-sm">About</NuxtLink>
        <NuxtLink to="/#stack" class="text-on-surface/80 hover:text-on-surface transition text-sm">Stack</NuxtLink>
        <NuxtLink to="/#focus" class="text-on-surface/80 hover:text-on-surface transition text-sm hidden sm:inline">Focus</NuxtLink>
        <NuxtLink to="/#contact" class="text-on-surface/80 hover:text-on-surface transition text-sm hidden sm:inline">Contact</NuxtLink>
        <a
          href="https://github.com/chrisjames-zd"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-divider hover:bg-accent/5 transition"
          aria-label="GitHub"
        >
          <span class="mdi mdi-github text-on-surface/80" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
