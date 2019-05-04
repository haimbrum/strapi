module.exports = {
  apps: [{
    name: 'strapi',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-218-12.us-east-2.compute.amazonaws.com',
      key: 'C:/Users/haimb/.ssh/pesso_key_pair.pem',
      ref: 'origin/master',
      repo: 'https://github.com/haimbrum/strapi.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}