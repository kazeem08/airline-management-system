const { env } = process;
module.exports = {
  appName: env.APP_NAME,
  port: env.PORT,
}