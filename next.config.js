module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
  // ,
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, path: false, process: false };

  //   return config;
  // },
}

