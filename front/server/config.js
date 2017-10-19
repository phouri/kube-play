module.exports = {
  host: process.env.MYSQL_HOST || '192.168.99.100',
  port: process.env.MYSQL_PORT || 30158,
  user: process.env.MYSQL_ROOT_PASSWORD || 'root',
  password: process.env.MYSQL_ROOT_USER || 'root',
  db: process.env.MYSQL_DATABASE || 'dev'
}