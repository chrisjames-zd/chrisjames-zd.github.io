<template>
  <div class="space-y-8">
    <SectionHeader
      eyebrow="Stack"
      title="What I build with"
      subtitle="The tools, languages, and platforms I reach for most often."
    />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardSurface v-for="group in stack" :key="group.id">
        <template #header>
          <div class="flex items-center gap-2">
            <span :class="['mdi', group.icon, 'text-accent text-2xl']" aria-hidden="true" />
            <h3 class="font-semibold">{{ group.title }}</h3>
          </div>
        </template>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="chip in group.items"
            :key="chip.label"
            class="inline-flex items-center gap-1.5 rounded-full border border-divider bg-background px-3 py-1 text-xs text-on-surface/85"
          >
            <span :class="['mdi', chip.icon, 'text-accent']" aria-hidden="true" />
            {{ chip.label }}
          </li>
        </ul>
      </CardSurface>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stack } from '~/data/profile';
</script>
