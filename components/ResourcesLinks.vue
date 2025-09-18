<template>
  <div class="space-y-8">
    <SectionHeader
      eyebrow="Resources"
      title="Useful links and tools"
      subtitle="Launch Demo Studio, find guides, and explore shared assets."
    />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResourceCard
        v-for="item in resources"
        :key="item.id"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :href="item.href"
        :external="item.external"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { resources } from '~/data/resources';
</script>