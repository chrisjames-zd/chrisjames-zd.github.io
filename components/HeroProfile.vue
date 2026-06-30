<template>
  <div class="relative isolate grid lg:grid-cols-5 gap-10 items-center">
    <div class="space-y-6 animate-fadeInUp lg:col-span-3">
      <div class="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
        <span class="mdi mdi-circle-medium animate-pulse" aria-hidden="true" />
        {{ profile.role }} · {{ profile.location }}
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface leading-tight tracking-tight">
        {{ profile.name }}
        <span class="block text-on-surface/70 text-lg sm:text-xl font-medium mt-3 max-w-2xl">
          {{ profile.tagline }}
        </span>
      </h1>

      <div class="flex flex-wrap gap-3 pt-2">
        <CallToAction />
      </div>

      <ul class="text-on-surface/70 text-sm grid sm:grid-cols-2 gap-2 max-w-xl pt-2">
        <li class="flex items-center gap-2"><span class="mdi mdi-robot-outline text-accent" /> AI agents &amp; MCP servers</li>
        <li class="flex items-center gap-2"><span class="mdi mdi-console-line text-accent" /> Developer experience &amp; CLIs</li>
        <li class="flex items-center gap-2"><span class="mdi mdi-view-grid-plus-outline text-accent" /> Internal platforms</li>
        <li class="flex items-center gap-2"><span class="mdi mdi-palette-swatch-outline text-accent" /> Design systems &amp; UI craft</li>
      </ul>
    </div>

    <div class="relative lg:col-span-2">
      <div class="bg-primary rounded-2xl shadow-elevated overflow-hidden border border-primary/20">
        <div class="flex items-center gap-1.5 px-4 py-3 bg-black/20 border-b border-white/5">
          <span class="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span class="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span class="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span class="ml-3 text-xs text-white/50 font-mono">~ / chris.james</span>
        </div>
        <pre class="p-5 sm:p-6 text-[13px] sm:text-sm leading-relaxed font-mono text-white/90 whitespace-pre-wrap"><span class="text-white/40">$</span> whoami
<span class="text-[#7ee787]">chris.james</span>

<span class="text-white/40">$</span> cat ~/role.txt
<span class="text-white/80">Demo Architect @ Zendesk</span>

<span class="text-white/40">$</span> ls ~/focus/
<span class="text-[#79c0ff]">ai-agents/</span>          <span class="text-[#79c0ff]">developer-tools/</span>
<span class="text-[#79c0ff]">internal-platforms/</span> <span class="text-[#79c0ff]">demo-systems/</span>

<span class="text-white/40">$</span> stack --top
<span class="text-[#ffa657]">typescript</span> <span class="text-[#ffa657]">python</span> <span class="text-[#ffa657]">vue</span> <span class="text-[#ffa657]">claude</span> <span class="text-[#ffa657]">mcp</span>

<span class="text-white/40">$</span> contact --help
  <span class="text-[#7ee787]">github</span>    <span class="text-white/40">→</span> /chrisjames-zd <span class="text-white/40">·</span> /cjames1224
  <span class="text-[#7ee787]">linkedin</span>  <span class="text-white/40">→</span> /in/cjames2 <span class="animate-pulse">▌</span></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile';
</script>
