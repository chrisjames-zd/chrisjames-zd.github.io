export type ResourceLink = {
  id: string;
  title: string;
  description: string;
  href?: string;
  icon: string;       // mdi icon class
  external?: boolean;
};

// Populate with your actual internal URLs
export const resources: ResourceLink[] = [
  {
    id: 'demo-studio',
    title: 'Launch Demo Studio',
    description: 'Open the in-instance Demo Studio UI to configure your demo environment.',
    href: process.env.NUXT_PUBLIC_DEMO_STUDIO_URL || '',
    icon: 'mdi-rocket-launch-outline',
    external: true
  },
  {
    id: 'request-access',
    title: 'Request Access',
    description: 'Ask for permissions or an enablement path to use Demo Studio.',
    href: process.env.NUXT_PUBLIC_REQUEST_ACCESS_URL || '',
    icon: 'mdi-account-plus-outline',
    external: true
  },
  {
    id: 'seismic',
    title: 'Seismic',
    description: 'Demo kits, collateral, and product materials.',
    href: '#',
    icon: 'mdi-file-document-multiple-outline',
    external: true
  },
  {
    id: 'reprise',
    title: 'Reprise',
    description: 'Interactive product demos and flows.',
    href: '#',
    icon: 'mdi-play-circle-outline',
    external: true
  },
  {
    id: 'shared-demo-accounts',
    title: 'Shared Demo Accounts',
    description: 'Access guidance and support for shared environments.',
    href: '#',
    icon: 'mdi-account-group-outline',
    external: true
  },
  {
    id: 'announce',
    title: '#demo-engineering-announce',
    description: 'Team updates, launches, outages, and news.',
    href: '#',
    icon: 'mdi-bullhorn-outline',
    external: true
  },
  {
    id: 'ask',
    title: '#ask-demo-engineering',
    description: 'Questions, troubleshooting, feedback, and access help.',
    href: '#',
    icon: 'mdi-chat-question-outline',
    external: true
  }
];