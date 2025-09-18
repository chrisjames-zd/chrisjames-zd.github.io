<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="blob blob-1 animate-floaty" />
      <div class="blob blob-2 animate-floaty" />
      <div class="blob blob-3 animate-floaty" />

      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <HeroDemoStudio />
      </div>
    </section>

    <section id="about" class="bg-surface border-t border-divider">
      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <AboutTeam />
      </div>
    </section>

    <section id="resources" class="bg-background">
      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <ResourcesLinks />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Demo Studio — Zendesk Demo Engineering',
  ogTitle: 'Demo Studio — Zendesk Demo Engineering',
  description: 'Access the Demo Studio tool, learn about the Demo Engineering team, and find internal resources.',
  ogDescription: 'Access the Demo Studio tool, learn about the Demo Engineering team, and find internal resources.'
});
</script>