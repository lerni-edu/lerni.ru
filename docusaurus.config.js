// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lerni',
  tagline: 'Онлайн-школа нового поколения',
  url: 'https://lerni.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lerni-edu',
  projectName: 'lerni.ru',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Lerni Logo',
          src: 'img/logo.svg',
          srcDark: "img/logo-inverted.svg",
        },
        items: [
          {
            type: 'doc',
            docId: 'school/about',
            position: 'left',
            label: 'О школе',
          },
          {
            type: 'dropdown',
            label: 'Курсы',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'courses/speedreading',
                label: 'Скорочтение',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'pricelist',
            position: 'left',
            label: 'Цены',
          },
          {
            type: 'doc',
            docId: 'tutors',
            position: 'right',
            label: 'Преподавателям',
          },
          {
            href: 'https://lerni.ru',
            label: 'Личный кабинет',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Общее',
            items: [
              {
                label: 'О школе',
                to: '/docs/school/about',
              },
              {
                label: 'Платформа',
                to: '/docs/school/platform',
              },
              {
                label: 'Цены',
                to: '/docs/pricelist',
              },
              {
                label: 'Преподавателям',
                to: '/docs/tutors',
              },
            ],
          },
          {
            title: 'Курсы',
            items: [
              {
                label: 'Скорочтение',
                to: '/docs/courses/speedreading',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lerni-edu',
              },
            ],
          },
          {
            title: 'Поддержка',
            items: [
              {
                label: 'support@lerni.ru',
                href: 'mailto:support@lerni.ru',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lerni. Лицензия <a target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
