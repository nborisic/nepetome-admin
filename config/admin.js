module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '15bd2b7233426c0fee12c3c7351b2d85'),
  },
});
