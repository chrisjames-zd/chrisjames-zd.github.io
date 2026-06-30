<template>
  <div class="space-y-8">
    <SectionHeader
      eyebrow="Get in touch"
      title="Let's build something"
      subtitle="The best place to find me, in roughly that order."
    />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="c in contacts"
        :key="c.id"
        :href="c.href"
        :target="c.external ? '_blank' : undefined"
        :rel="c.external ? 'noopener' : undefined"
        class="group flex items-center gap-4 rounded-2xl border border-divider bg-surface p-5 hover:shadow-elevated hover:-translate-y-0.5 transition"
      >
        <span
          :class="['mdi', c.icon, 'text-3xl text-accent group-hover:text-primary transition']"
          aria-hidden="true"
        />
        <div class="min-w-0">
          <div class="font-semibold text-on-surface">{{ c.title }}</div>
          <div class="text-sm text-on-surface/70 truncate">{{ c.handle }}</div>
        </div>
        <span class="mdi mdi-arrow-top-right ml-auto text-on-surface/40 group-hover:text-primary transition" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contacts } from '~/data/profile';
</script>
