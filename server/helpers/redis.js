const redis = require('redis');
module.exports = redis.createClient({
  hosts: 'redis',
  port: '6379'
});
