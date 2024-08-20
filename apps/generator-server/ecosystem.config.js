module.exports = {
  apps: [
    {
      name: "generator-server",
      script:
        "node --env-file=.env .next/standalone/apps/generator-server/server.js",
    },
  ],
};
