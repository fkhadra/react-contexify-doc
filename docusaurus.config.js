module.exports = {
  title: "React-Contexify",
  tagline: "React context menu made easy !",
  url: "https://fkhadra.github.io/",
  baseUrl: "/react-contexify/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "fkhadra", // Usually your GitHub org/user name.
  projectName: "react-contexify", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/fkhadra/react-contexify-doc/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
