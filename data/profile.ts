// Single source of truth for the personal profile content.
// Update names, links, and copy here — components read from this file.

export const profile = {
  name: 'Chris James',
  initials: 'CJ',
  role: 'Demo Architect @ Zendesk',
  location: 'Remote',
  tagline:
    'I build internal tooling, AI copilots, and developer experiences that make go-to-market engineering ridiculously fast.',
  bio: [
    "I'm a Demo Architect at Zendesk, where I sit at the intersection of engineering, AI, and field enablement.",
    "Day to day I design and ship the tools that other architects, engineers, and sellers use — CLIs, web apps, agents, and bots that take the friction out of building, configuring, and demoing complex software.",
    "I care about taste in product, calm interfaces, and code that's small, sharp, and easy for the next person to extend."
  ]
} as const;

export type StackChip = { label: string; icon: string };
export type StackGroup = { id: string; title: string; icon: string; items: StackChip[] };

export const stack: StackGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'mdi-code-tags',
    items: [
      { label: 'TypeScript', icon: 'mdi-language-typescript' },
      { label: 'JavaScript', icon: 'mdi-language-javascript' },
      { label: 'Python', icon: 'mdi-language-python' },
      { label: 'HTML & CSS', icon: 'mdi-language-html5' },
      { label: 'Shell / Bash', icon: 'mdi-console' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'mdi-monitor-dashboard',
    items: [
      { label: 'Vue 3 / Nuxt', icon: 'mdi-vuejs' },
      { label: 'React', icon: 'mdi-react' },
      { label: 'Tailwind CSS', icon: 'mdi-tailwind' },
      { label: 'Radix / shadcn', icon: 'mdi-palette-outline' },
      { label: 'Figma', icon: 'mdi-vector-square' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'mdi-server-network',
    items: [
      { label: 'Node.js', icon: 'mdi-nodejs' },
      { label: 'FastAPI', icon: 'mdi-flash-outline' },
      { label: 'REST & Webhooks', icon: 'mdi-api' },
      { label: 'SQLite / Postgres', icon: 'mdi-database-outline' },
      { label: 'OAuth & SSO', icon: 'mdi-shield-key-outline' }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Agents',
    icon: 'mdi-robot-outline',
    items: [
      { label: 'Claude / Anthropic', icon: 'mdi-brain' },
      { label: 'OpenAI & Gemini', icon: 'mdi-creation' },
      { label: 'MCP servers', icon: 'mdi-server' },
      { label: 'Agentic workflows', icon: 'mdi-graph-outline' },
      { label: 'Prompt engineering', icon: 'mdi-text-box-edit-outline' }
    ]
  },
  {
    id: 'platforms',
    title: 'Platforms',
    icon: 'mdi-layers-triple-outline',
    items: [
      { label: 'Zendesk Apps Framework', icon: 'mdi-puzzle-outline' },
      { label: 'Help Center theming', icon: 'mdi-lifebuoy' },
      { label: 'Slack apps & bots', icon: 'mdi-slack' },
      { label: 'Stream Deck plugins', icon: 'mdi-gamepad-variant-outline' },
      { label: 'Mobile (iOS / Android)', icon: 'mdi-cellphone-link' }
    ]
  },
  {
    id: 'devops',
    title: 'Build & Ship',
    icon: 'mdi-rocket-launch-outline',
    items: [
      { label: 'GitHub Actions', icon: 'mdi-github' },
      { label: 'Docker', icon: 'mdi-docker' },
      { label: 'Vercel / GH Pages', icon: 'mdi-cloud-upload-outline' },
      { label: 'CLI tools', icon: 'mdi-console-line' },
      { label: 'VS Code extensions', icon: 'mdi-microsoft-visual-studio-code' }
    ]
  }
];

export type Domain = { id: string; title: string; description: string; icon: string };

// Themes I work in — kept generic on purpose. No specific project names.
export const domains: Domain[] = [
  {
    id: 'ai-agents',
    title: 'AI agents & developer copilots',
    description:
      'Designing MCP servers, agentic workflows, and Claude-powered tools that automate the slow parts of building software.',
    icon: 'mdi-robot-happy-outline'
  },
  {
    id: 'internal-platforms',
    title: 'Internal platforms',
    description:
      'Web apps and admin tools that turn tribal knowledge into self-serve workflows for technical and non-technical teams.',
    icon: 'mdi-view-grid-plus-outline'
  },
  {
    id: 'dx',
    title: 'Developer experience & CLIs',
    description:
      'Sharp CLIs, scripts, and editor integrations that compress hour-long setups into a single command.',
    icon: 'mdi-console-line'
  },
  {
    id: 'demo-systems',
    title: 'Demo engineering systems',
    description:
      'Generators, schedulers, and config tooling that keep complex SaaS demo environments believable, current, and fast to spin up.',
    icon: 'mdi-cog-sync-outline'
  },
  {
    id: 'integrations',
    title: 'Integrations & bots',
    description:
      'Slack-native bots, webhook-driven automations, and cross-product glue that lives quietly inside the tools people already use.',
    icon: 'mdi-puzzle-outline'
  },
  {
    id: 'design-systems',
    title: 'Design systems & UI craft',
    description:
      'Calm, accessible interfaces built on Tailwind, Radix, and shadcn patterns — Figma to production.',
    icon: 'mdi-palette-swatch-outline'
  }
];

export type ContactLink = {
  id: string;
  title: string;
  handle: string;
  href: string;
  icon: string;
  external?: boolean;
};

export const contacts: ContactLink[] = [
  {
    id: 'github-work',
    title: 'GitHub · work',
    handle: '@chrisjames-zd',
    href: 'https://github.com/chrisjames-zd',
    icon: 'mdi-github',
    external: true
  },
  {
    id: 'github-personal',
    title: 'GitHub · personal',
    handle: '@cjames1224',
    href: 'https://github.com/cjames1224',
    icon: 'mdi-github',
    external: true
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    handle: 'in/cjames2',
    href: 'https://www.linkedin.com/in/cjames2/',
    icon: 'mdi-linkedin',
    external: true
  }
];
