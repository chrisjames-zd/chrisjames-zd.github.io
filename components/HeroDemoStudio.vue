<template>
  <div class="relative isolate grid lg:grid-cols-2 gap-10 items-center">
    <div class="space-y-6 animate-fadeInUp">
      <div class="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
        <span class="mdi mdi-star-three-points-outline" aria-hidden="true" />
        Internal Tooling
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
        Demo Studio
        <span class="block text-on-surface/80 text-xl sm:text-2xl font-medium mt-2">
          The all-in-one, GenAI-powered demo setup & management tool
        </span>
      </h1>
      <p class="text-on-surface/80 max-w-prose">
        Demo Studio runs inside your Zendesk instance. Use the button below to access it,
        or request access if you don’t have permissions yet. 
      </p>

      <div class="flex flex-wrap gap-3">
        <CallToAction />
      </div>

      <ul class="text-on-surface/70 text-sm grid sm:grid-cols-2 gap-2 max-w-xl">
        <li class="flex items-center gap-2"><span class="mdi mdi-cog-outline text-accent" /> Guided configuration flows</li>
        <li class="flex items-center gap-2"><span class="mdi mdi-robot-outline text-accent" /> GenAI-assisted setup</li>
        <li class="flex items-center gap-2"><span class="mdi mdi-broom text-accent" /> Account hygiene & cleanup</li>
        <li class="flex items-center gap-2"><span class="mdi mdi-school-outline text-accent" /> Templates, best practices, training</li>
      </ul>
    </div>

    <div class="relative">
      <div class="bg-surface rounded-2xl border border-divider shadow-card p-6 lg:p-8">
        <h3 class="font-semibold text-on-surface mb-3 flex items-center gap-2">
          <span class="mdi mdi-view-dashboard-outline text-accent" /> What’s inside
        </h3>
        <div class="grid sm:grid-cols-2 gap-3 text-sm">
          <FeatureItem icon="mdi-clipboard-text-outline" title="Industry Templates" />
          <FeatureItem icon="mdi-robot-happy-outline" title="Bot & WFM Generators" />
          <FeatureItem icon="mdi-swap-horizontal" title="Imports & Translations" />
          <FeatureItem icon="mdi-folder-settings-outline" title="Recurring Ticket Schedules" />
          <FeatureItem icon="mdi-broom" title="Account Cleanup & Reports" />
          <FeatureItem icon="mdi-book-open-variant" title="Guides & Video Training" />
        </div>

        <!-- <div class="mt-6">
          <div class="rounded-xl border border-accent/40 bg-gradient-to-br from-white to-accent/5 p-4">
            <p class="text-on-surface/80 text-sm">
              Two interfaces:
            </p>
            <ul class="text-on-surface/80 text-sm mt-2 pl-4 list-disc">
              <li><strong>Demo Studio</strong>: installed in each demo account for setup/config—the "Toolbox" 🧰</li>
              <li><strong>Demo Admin Portal (Coming soon)</strong>: centralized management—the "Factory" 🏭
      </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureItem from './FeatureItem.vue';
</script>