// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React-Contexify",
  tagline: "React context menu made easy !",
  url: "https://fkhadra.github.io/",
  baseUrl: "/react-contexify/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "fkhadra", // Usually your GitHub org/user name.
  projectName: "react-contexify", // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/fkhadra/react-contexify-doc/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "React-Contexify",
        logo: {
          alt: "Site Logo",
          src: "img/logo.svg",
          target: "_self", // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
        },
        items: [
          {
            to: "https://github.com/fkhadra/react-contexify",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Fadi Khadra`,
      },
      announcementBar: {
        id: "sponsor", // Any value that will identify this message
        content:
          'Hey you like my work? Consider <a target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/fkhadra">sponsoring</a> me',
      },
      algolia: {
        appId: "G8AW1ZJIPB",
        apiKey: "513158e375496431517b0384802693a2",
        indexName: "react-contexify",
        algoliaOptions: {}, // Optional, if provided by Algolia
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
