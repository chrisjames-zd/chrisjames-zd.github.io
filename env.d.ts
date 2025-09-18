/// <reference types="nuxt" />
/// <reference types="@nuxt/schema" />

// Provide global types for Vue SFCs and Nuxt composables
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
