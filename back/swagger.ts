const swaggerJSDoc = require('swagger-jsdoc');

var swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    // 정보 작성
    title: 'PlayKUround-server',
    version: '1.0.0',
    description: 'PlayKUround-server API DOCs',
  },
  host: 'localhost:8000', // base-url
  basePath: '/', // base path
};

var options = {
  swaggerDefinition: swaggerDefinition,
  apis: [__dirname + '/routes/*.{js,ts}'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
