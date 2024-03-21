export type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  export const menus: { name: string; items: Item[] }[] = [
    {
      name: 'Alphabet',
      items: [
        {
          name: 'Schnuppern',
          slug: 'layouts',
          description: 'Schreiben Sie deutsche Wörter, wie sie klingen, auf Koreanisch.',
        },
        {
          name: 'Grouped Layouts',
          slug: 'route-groups',
          description: 'Organize routes without affecting URL paths',
        },
      ],
    },
    {
      name: 'Development',
      items: [
        {
          name: 'Home',
          slug: '',
          description:
            'The website for Korean Alphabet lerner',
        },
        {
          name: 'Login',
          slug: 'login',
          description: 'Login to access to more resources',
        },
        {
          name: 'Signup',
          slug: 'signup',
          description: 'Create Account to track your performance',
        },
        {
          name: 'PressCountAPI',
          slug: 'loading',
          description:
            'Create meaningful Loading UI for specific parts of an app',
        },
      ],
    },
    {
      name: 'Data Fetching',
      items: [
        {
          name: 'Streaming with Suspense',
          slug: 'streaming',
          description:
            'Streaming data fetching from the server with React Suspense',
        },
        {
          name: 'Static Data',
          slug: 'ssg',
          description: 'Generate static pages',
        },
        {
          name: 'Dynamic Data',
          slug: 'ssr',
          description: 'Server-render pages',
        },
        {
          name: 'Incremental Static Regeneration',
          slug: 'isr',
          description: 'Get the best of both worlds between static & dynamic',
        },
      ],
    },
    {
      name: 'Components',
      items: [
        {
          name: 'Client Context',
          slug: 'context',
          description:
            'Pass context between Client Components that cross Server/Client Component boundary',
        },
      ],
    },
    {
      name: 'Misc',
      items: [
        {
          name: 'Client Component Hooks',
          slug: 'hooks',
          description: 'Preview the routing hooks available in Client Components',
        },
        {
          name: 'CSS and CSS-in-JS',
          slug: 'styling',
          description: 'Preview the supported styling solutions',
        },
        {
          name: 'Code Snippets',
          slug: 'snippets',
          description: 'A collection of useful App Router code snippets',
        },
      ],
    },
  ];
  