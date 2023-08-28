/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/Login-form/Signup",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
