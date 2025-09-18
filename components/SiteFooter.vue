<template>
  <footer class="bg-surface border-t border-divider">
    <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-8 text-sm text-on-surface/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p>© {{ new Date().getFullYear() }} Zendesk Demo Engineering</p>
      <div class="flex items-center gap-4">
        <a class="hover:text-on-surface transition" href="#about">About</a>
        <a class="hover:text-on-surface transition" href="#resources">Resources</a>
        <a class="hover:text-on-surface transition" href="#" @click.prevent="scrollToTop">Back to top ↑</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
