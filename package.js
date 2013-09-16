Package.describe({
  summary: "Live.JS implementation for live assets (alpha)"
});

Npm.depends({
  connect: "2.7.10"
});

Package.on_use(function(api) {
  api.use(['webapp', 'routepolicy'], 'server');

  api.add_files([
    'fs.js',
  ], 'server'); 
  api.add_files([
    'live.js',
  ], 'client'); 
});
