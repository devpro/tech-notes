import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevPro Tech Notes',
  tagline: 'Learning can be fun!',
  favicon: 'img/favicon.ico',

  future: {
    v4: true
  },

  url: 'https://notes.devpro.fr',
  baseUrl: '/',
  organizationName: 'devpro',
  projectName: 'tech-notes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          path: 'docs'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        docsDir: 'docs',
        searchBarPosition: 'right',
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevPro Tech Notes',
      logo: {
        alt: 'DevPro',
        src: 'img/husky_logo.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'organizationSidebar',
          position: 'left',
          label: 'Organizations'
        },
        {
          type: 'docSidebar',
          sidebarId: 'fundamentalSidebar',
          position: 'left',
          label: 'Fundamentals'
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guides'
        },
        {
          type: 'docSidebar',
          sidebarId: 'studySidebar',
          position: 'left',
          label: 'Studies'
        },
        {
          href: 'https://github.com/devpro/tech-notes',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Organizations',
          items: [
            {
              label: 'Communities',
              to: '/organizations/communities/'
            },
            {
              label: 'Companies',
              to: '/organizations/companies/'
            },
            {
              label: 'Foundations',
              to: '/organizations/foundations/'
            },
            {
              label: 'Independent projects',
              to: '/organizations/independent-projects/'
            },
            {
              label: 'Institutions',
              to: '/organizations/institutions/'
            }
          ]
        },
        {
          title: 'Fundamentals',
          items: [
            {
              label: 'Infrastructure',
              to: '/fundamentals/infrastructure/'
            },
            {
              label: 'Practices',
              to: '/fundamentals/practices/'
            },
            {
              label: 'Solution design',
              to: '/fundamentals/solution-design/'
            },
            {
              label: 'Standards',
              to: '/fundamentals/standards/'
            }
          ]
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'Courses',
              to: '/guides/courses/'
            },
            {
              label: 'Learning paths',
              to: '/guides/learning-paths/'
            },
            {
              label: 'Procedures',
              to: '/guides/procedures/'
            },
            {
              label: 'Workstations',
              to: '/guides/workstations/'
            }
          ]
        },
        {
          title: 'Studies',
          items: [
            {
              label: 'ADRs',
              to: '/studies/adr/'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Kubernetes essentials',
              href: 'https://github.com/devpro/kubernetes-essentials'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevPro. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'batch', 'csharp', 'ini', 'javascript', 'php', 'powershell', 'ruby', 'sql', 'toml']
    },
  } satisfies Preset.ThemeConfig
};

export default config;
