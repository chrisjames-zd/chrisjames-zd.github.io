<template>
  <div class="space-y-8">
    <SectionHeader
      eyebrow="About"
      title="Hi, I'm Chris."
      subtitle="Engineer at heart, designer by habit, demo architect by trade."
    />

    <div class="grid lg:grid-cols-3 gap-6">
      <CardSurface class="lg:col-span-2">
        <template #header>
          <div class="flex items-center gap-2">
            <span class="mdi mdi-account-outline text-accent text-2xl" aria-hidden="true" />
            <h3 class="font-semibold">A short bio</h3>
          </div>
        </template>
        <div class="space-y-3 text-on-surface/85 leading-relaxed">
          <p v-for="(line, i) in profile.bio" :key="i">{{ line }}</p>
        </div>
      </CardSurface>

      <CardSurface>
        <template #header>
          <div class="flex items-center gap-2">
            <span class="mdi mdi-compass-outline text-accent text-2xl" aria-hidden="true" />
            <h3 class="font-semibold">How I work</h3>
          </div>
        </template>
        <ul class="space-y-3 text-sm text-on-surface/85">
          <li class="flex gap-2">
            <span class="mdi mdi-check-circle-outline text-success mt-0.5" />
            <span>Ship small, sharp tools. Optimize for the person using it on a Tuesday afternoon.</span>
          </li>
          <li class="flex gap-2">
            <span class="mdi mdi-check-circle-outline text-success mt-0.5" />
            <span>Treat AI as a collaborator, not a feature. Build the agent <em>and</em> the UI it lives in.</span>
          </li>
          <li class="flex gap-2">
            <span class="mdi mdi-check-circle-outline text-success mt-0.5" />
            <span>Strong opinions, loosely held — and held entirely by the code I'm willing to write.</span>
          </li>
          <li class="flex gap-2">
            <span class="mdi mdi-check-circle-outline text-success mt-0.5" />
            <span>Type safety, calm interfaces, and tasteful defaults. Always.</span>
          </li>
        </ul>
      </CardSurface>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile';
</script>
