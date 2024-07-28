/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://prayer-for.com/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/sign-up", "/sign-in"],
};

