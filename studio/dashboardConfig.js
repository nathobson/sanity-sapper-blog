export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0759fc64702958abf643f8',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ixtw3hxs',
                  apiId: 'f86f2d3c-e1d5-4f15-8196-c56b21d2d471'
                },
                {
                  buildHookId: '5e0759fc64702947d6f643f6',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-usj83an6',
                  apiId: '5108c94b-8a52-4653-915a-4dae4a530b64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-usj83an6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
