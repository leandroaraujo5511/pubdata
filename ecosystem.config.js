module.exports = {
  apps: [
    {
      name: "pubdate-front",
      exec_mode: "fork",
      instances: "1",
      script: "npm start",
      args: "start",
    },
  ],
};
