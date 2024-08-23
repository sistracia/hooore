module.exports = {
  apps: [
    {
      name: "generator-server",
      script: "node --env-file=./.env ./dist/index.js",
    },
  ],
};
