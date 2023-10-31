const metroConfig = {
    resolver: {
      sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'],
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  };
  
  module.exports = metroConfig;
  