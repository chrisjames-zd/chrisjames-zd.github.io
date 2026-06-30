<template>
  <div class="space-y-8">
    <SectionHeader
      eyebrow="Focus areas"
      title="What I work on"
      subtitle="The kinds of problems I keep coming back to — across roles, side projects, and weekends."
    />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardSurface v-for="d in domains" :key="d.id" class="hover:shadow-elevated hover:-translate-y-0.5 transition">
        <div class="flex items-center gap-3 mb-3">
          <span :class="['mdi', d.icon, 'text-2xl text-accent']" aria-hidden="true" />
          <h3 class="font-semibold text-on-surface">{{ d.title }}</h3>
        </div>
        <p class="text-sm text-on-surface/80 leading-relaxed">{{ d.description }}</p>
      </CardSurface>
    </div>
  </div>
</template>

<script setup lang="ts">
import { domains } from '~/data/profile';
</script>
