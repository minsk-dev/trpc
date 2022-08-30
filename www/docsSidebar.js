// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'tRPC',
      collapsed: false,
      items: [
        'main/introduction',
        'main/quickstart',
        'main/example-apps',
        'nextjs/introduction',
        'reactjs/introduction',
      ],
    },
    {
      type: 'category',
      label: '@trpc/server',
      collapsed: false,
      items: [
        'server/router',
        'server/merging-routers',
        'server/context',
        'server/middlewares',
        'server/server-side-calls',
        'server/metadata',
        'server/authorization',
        'server/output-validation',
        'server/infer-types',
        'server/error-handling',
        'server/error-formatting',
        'server/data-transformers',
        'server/caching',
        'server/express',
        'server/fastify',
        'server/fetch',
        'server/aws-lambda',
      ],
    },
    {
      type: 'category',
      label: '@trpc/client',
      collapsed: false,
      items: [
        'client/vanilla',
        'client/aborting-procedures',
        'client/links',
        'client/header',
        'client/cors',
      ],
    },
    {
      type: 'category',
      label: '@trpc/react',
      collapsed: false,
      items: [
        'reactjs/queries',
        'reactjs/mutations',
        'reactjs/useInfiniteQuery',
        'reactjs/invalidateQueries',
        'reactjs/ssg-helpers',
      ],
    },
    {
      type: 'category',
      label: '@trpc/next',
      collapsed: false,
      items: ['nextjs/ssr', 'nextjs/ssg', 'nextjs/starter-projects'],
    },
    {
      type: 'category',
      label: 'Extra information',
      collapsed: false,
      items: [
        'further/rpc',
        'further/subscriptions',
        'further/further-reading',
      ],
    },
    {
      type: 'doc',
      id: 'migration/migrate-from-v9-to-v10',
    },
  ],
};

module.exports = sidebars;