export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://labcom-optimaa.com', 
        'https://www.labcom-optimaa.com',       
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'], 
      allowedHeaders: '*',                     
      exposedHeaders: '*',                   
      credentials: false,                        
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
