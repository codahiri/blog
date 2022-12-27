const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 3
    await generatePaginationPages(pageSize)
    return {
        title: 'ilosrim',
        base: '/',
        description: 'vitepress,blog,blog-theme',
        ignoreDeadLinks: true,
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://github.com/ilosrim/vitepress-blog-pure',
            comment: {
                repo: 'ilosrim/vitepress-blog-pure',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Archives', link: '/pages/archives' },
                { text: 'Tags', link: '/pages/tags' },
                { text: 'About', link: '/pages/about' }
                // { text: 'Ilosrim', link: 'https://ilosrim.uz' }  -- External link test
            ],
            //outline:[2,3],
            outlineTitle: 'Maqola hulosasi',
            socialLinks: [{ icon: 'github', link: 'https://github.com/ilosrim/vitepress-blog-pure' }]
        },
        srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

        vite: {
            //build: { minify: false }
            server: { port: 5000 }
        }
        /*
      optimizeDeps: {
          keepNames: true
      }
      */
    }
}

module.exports = config()
