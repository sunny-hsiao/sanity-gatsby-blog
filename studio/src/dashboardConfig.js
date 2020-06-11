export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee23aa462c43ced2c7c7b91',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h89p2en6',
                  apiId: 'ded8fe8b-9aeb-4548-899b-caa36fc4d473'
                },
                {
                  buildHookId: '5ee23aa4d3f54b2ae4b934bc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ownxedsd',
                  apiId: '3eb169c5-de1b-4bad-a3c5-8e1d282085f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sunny-hsiao/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ownxedsd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
