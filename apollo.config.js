module.exports = {
 client: {
  includes: ['./apollo/**/*.{tsx,ts}'],
  tagName: 'gql',
  service: { name: 'nuber-eats-backend', url: 'http://127.0.0.1:4000/graphql' },
 },
}
