var connect = Npm.require('connect');

RoutePolicy.declare('/assets', 'network');

// Listen to incoming http requests
WebApp.connectHandlers
  .use('/assets', 
  connect.static(process.env['ASSETS_DIR'])
);
