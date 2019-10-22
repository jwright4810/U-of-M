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
                  buildHookId: '5dae5b59189d195fd53a819e',
                  title: 'Sanity Studio',
                  name: 'U-of-M-studio',
                  apiId: 'da697478-3bff-4ee1-90a4-63d096c2ab24'
                },
                {
                  buildHookId: '5dae5b59cdc6859dcd55fb03',
                  title: 'Blog Website',
                  name: 'U-of-M',
                  apiId: 'f09aa5ea-a799-417f-a760-ab9bc66ce656'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jwright4810/U-of-M',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://U-of-M.netlify.com', category: 'apps'}
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
