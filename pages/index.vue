<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="blob blob-1 animate-floaty" />
      <div class="blob blob-2 animate-floaty" />
      <div class="blob blob-3 animate-floaty" />

      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-24">
        <HeroProfile />
      </div>
    </section>

    <section id="about" class="bg-surface border-t border-divider scroll-mt-20">
      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <AboutMe />
      </div>
    </section>

    <section id="stack" class="bg-background border-t border-divider scroll-mt-20">
      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <ExpertiseStack />
      </div>
    </section>

    <section id="focus" class="bg-surface border-t border-divider scroll-mt-20">
      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <DomainsGrid />
      </div>
    </section>

    <section id="contact" class="bg-background border-t border-divider scroll-mt-20">
      <div class="container mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <ContactLinks />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Chris James — Demo Architect @ Zendesk',
  ogTitle: 'Chris James — Demo Architect @ Zendesk',
  description:
    'Chris James is a Demo Architect at Zendesk building AI copilots, internal tooling, and developer experiences for go-to-market engineering.',
  ogDescription:
    'Chris James is a Demo Architect at Zendesk building AI copilots, internal tooling, and developer experiences for go-to-market engineering.'
});
</script>
