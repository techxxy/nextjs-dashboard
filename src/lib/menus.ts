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
          slug: 'schnuppern',
          description: 'Schreiben Sie deutsche Wörter, wie sie klingen, auf Koreanisch.',
        },
        {
          name: 'Alphabets',
          slug: 'vowel',
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
  ];
  