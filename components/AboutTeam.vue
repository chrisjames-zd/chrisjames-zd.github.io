<template>
  <div class="space-y-8">
    <SectionHeader
      eyebrow="About Us"
      title="Zendesk Demo Engineering"
      subtitle="We support the field with tooling, configuration, and expert demos that win."
    />

    <div class="grid lg:grid-cols-2 gap-6">
      <CardSurface>
        <template #header>
          <div class="flex items-center gap-2">
            <span class="mdi mdi-account-cog-outline text-accent text-2xl" aria-hidden="true" />
            <h3 class="font-semibold">Who we are</h3>
          </div>
        </template>
        <ul class="mt-3 space-y-1 text-on-surface/80">
          <li><strong>Director:</strong> Asa Engel</li>
          <li><strong>Demo Architects:</strong> Tetyana Kernychna, Iryna Parahailo, Connor Campbell, Rico Corona, Chris James</li>
          <li><strong>Demo Engineers:</strong> Marcelo De Bortoli, Aron Diploma, Daniel Montes, Henrique Watanabe, Patrick Co</li>
        </ul>
        <p class="text-xs text-on-surface/60 mt-3">
          Note: Team rosters evolve—check the <a href="https://zendesk.enterprise.slack.com/archives/C08SZL6R214"  target="_blank">#demo-engineering-announce</a> channel for updates.
        </p>
      </CardSurface>

      <CardSurface>
        <template #header>
          <div class="flex items-center gap-2">
            <span class="mdi mdi-rocket-outline text-accent text-2xl" aria-hidden="true" />
            <h3 class="font-semibold">What we do</h3>
          </div>
        </template>
        <div class="grid sm:grid-cols-2 gap-3">
          <div>
            <h4 class="font-medium text-on-surface mb-2">Demo Architects</h4>
            <ul class="list-disc pl-5 text-on-surface/80 space-y-1 text-sm">
              <li>Shared demo accounts, demo kits, preconfigured accounts</li>
              <li>Seismic, Reprise, and field enablement</li>
              <li>Opportunity support and concierge assistance</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-on-surface mb-2">Demo Engineers</h4>
            <ul class="list-disc pl-5 text-on-surface/80 space-y-1 text-sm">
              <li>Custom ZAF POC apps and HC themes</li>
              <li>Advanced messaging, bots, external actions, webhooks</li>
              <li>Custom data imports, design workshops, and more</li>
            </ul>
          </div>
        </div>
      </CardSurface>
    </div>

    <CardSurface>
      <template #header>
        <div class="flex items-center gap-2">
          <span class="mdi mdi-forum-outline text-accent text-2xl" aria-hidden="true" />
          <h3 class="font-semibold">How to reach us</h3>
        </div>
      </template>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
        <li class="flex items-center gap-2">
          <span class="mdi mdi-pound text-primary" />
          <span><strong><a href="https://zendesk.enterprise.slack.com/archives/C75UJSMN0" target="_blank">#ask-demo-engineering</a></strong> — questions, support, access</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="mdi mdi-bullhorn-outline text-primary" />
          <span><strong><a href="https://zendesk.enterprise.slack.com/archives/C08SZL6R214" target="_blank">#demo-engineering-announce</a></strong> — updates & launches</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="mdi mdi-shield-lock-outline text-primary" />
          <span><a href="https://zdtechservices-demotech.zendesk.com/hc/en-us/requests/new" target="_blank">Submit a request to the team</a></span>
        </li>
      </ul>
    </CardSurface>
  </div>
</template>

<script setup lang="ts">
</script>
