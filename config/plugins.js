module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
  },
});

module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_A25mrT2B5cBAeW1Zq2VLx7lY06VR/s0zd4Eryek?buildCache=true",
      apiToken: "jVZZyVBSVex9obvyevbEaiCQ",
      appFilter: "titki-server",
      teamFilter: "prj_A25mrT2B5cBAeW1Zq2VLx7lY06VR",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
