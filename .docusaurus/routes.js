import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '409'),
    routes: [
      {
        path: '/docs/Implementation/crs',
        component: ComponentCreator('/docs/Implementation/crs', '4ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Implementation/eip',
        component: ComponentCreator('/docs/Implementation/eip', '8ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Implementation/summary',
        component: ComponentCreator('/docs/Implementation/summary', '553'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Theory/dividing_on_zero',
        component: ComponentCreator('/docs/Theory/dividing_on_zero', '4fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Theory/multipoint',
        component: ComponentCreator('/docs/Theory/multipoint', '35c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Theory/summary',
        component: ComponentCreator('/docs/Theory/summary', 'b2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/why_verkle_trie',
        component: ComponentCreator('/docs/why_verkle_trie', 'c10'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e7b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
