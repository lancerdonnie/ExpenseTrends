export const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/v1'
    : '/api/v1';
