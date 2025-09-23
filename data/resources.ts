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
    id: 'request-access',
    title: 'Request Access',
    description: 'Submit access request form to use Demo Studio.',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdrOzJF8-UcvCHQC07weGGwq5fuEFon4OYTI0tYMLHQTXnbsA/viewform?usp=header',
    icon: 'mdi-account-plus-outline',
    external: true
  },
  {
    id: 'seismic',
    title: 'Seismic',
    description: 'Demo kits, collateral, and product materials.',
    href: 'https://zendesk.seismic.com/app?ContentId=ffc3cc05-c2c7-47f7-a322-5e5e1d74f132#/doccenter/bd11dcd4-01d7-4e51-a560-b30c4a23ee7f/doc/%25252Fdd5c9daa42-91d8-42ca-b348-96bb44f60124%25252Fdd42502a00-d8d2-4a48-b89a-4a1215989748%25252FdfMWUyMjA0MWItZThhMy00NWI2LTlmNWQtZGU5OGMwMTI0NTk5%25252COthers%25252Flfed267c8f-ee13-4df4-96d4-bbb4e8576ae3/grid/?anchorId=44c46595-a2ad-4283-83bc-c276e55c438c',
    icon: 'mdi-file-document-multiple-outline',
    external: true
  },
  {
    id: 'reprise',
    title: 'Reprise',
    description: 'Interactive product demos and flows.',
    href: 'https://docs.google.com/spreadsheets/d/1dGYCC__7BTP-pcNTiF6C2kNbO5MIrLqZs1ro6bjUQSw/edit?gid=1791517565#gid=1791517565',
    icon: 'mdi-play-circle-outline',
    external: true
  },
  {
    id: 'shared-demo-accounts',
    title: 'Shared Demo Accounts',
    description: 'Access guidance and support for shared environments.',
    href: 'https://docs.google.com/spreadsheets/d/1dGYCC__7BTP-pcNTiF6C2kNbO5MIrLqZs1ro6bjUQSw/edit?gid=0#gid=0',
    icon: 'mdi-account-group-outline',
    external: true
  },
  {
    id: 'announce',
    title: '#demo-engineering-announce',
    description: 'Team updates, launches, outages, and news.',
    href: 'https://zendesk.enterprise.slack.com/archives/C08SZL6R214',
    icon: 'mdi-bullhorn-outline',
    external: true
  },
  {
    id: 'ask',
    title: '#ask-demo-engineering',
    description: 'Questions, troubleshooting, feedback, and access help.',
    href: 'https://zendesk.enterprise.slack.com/archives/C75UJSMN0',
    icon: 'mdi-chat-question-outline',
    external: true
  }
];