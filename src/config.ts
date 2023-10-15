export const config = () => ({
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL,
});

// GOOGLE_CLIENT_ID =
//   '27128024445-u44v1d82c2eoms0iscdpsg0a827sg3u2.apps.googleusercontent.com';
// GOOGLE_CLIENT_SECRET = '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';
// GOOGLE_CALLBACK_URL = 'http://localhost:3001/api/auth/google/redirect';
