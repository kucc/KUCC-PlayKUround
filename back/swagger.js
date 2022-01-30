const swaggerJSDoc = require('swagger-jsdoc');
const { backUrl } = require('./config/url');

var swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    // 정보 작성
    title: 'PlayKUround-server',
    version: '1.0.0',
    description: 'PlayKUround-server API DOCs',
  },
  host:
    process.env.NODE_ENV === 'development' ? 'localhost:8000' : `${backUrl}`, // base-url
  basePath: '/', // base path
};

var options = {
  swaggerDefinition: swaggerDefinition,
  apis: [__dirname + '/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
