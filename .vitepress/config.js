import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'
import mathjax3 from "markdown-it-mathjax3";

// 渲染latex
const customElements = [
	"math",
	"maction",
	"maligngroup",
	"malignmark",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mi",
	"mlongdiv",
	"mmultiscripts",
	"mn",
	"mo",
	"mover",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"ms",
	"mscarries",
	"mscarry",
	"mscarries",
	"msgroup",
	"mstack",
	"mlongdiv",
	"msline",
	"mstack",
	"mspace",
	"msqrt",
	"msrow",
	"mstack",
	"mstack",
	"mstyle",
	"msub",
	"msup",
	"msubsup",
	"mtable",
	"mtd",
	"mtext",
	"mtr",
	"munder",
	"munderover",
	"semantics",
	"math",
	"mi",
	"mn",
	"mo",
	"ms",
	"mspace",
	"mtext",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"msqrt",
	"mstyle",
	"mmultiscripts",
	"mover",
	"mprescripts",
	"msub",
	"msubsup",
	"msup",
	"munder",
	"munderover",
	"none",
	"maligngroup",
	"malignmark",
	"mtable",
	"mtd",
	"mtr",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"msline",
	"msrow",
	"mstack",
	"maction",
	"semantics",
	"annotation",
	"annotation-xml",
	"mjx-container",
	"mjx-assistive-mml",
];


//每页的文章数量
const pageSize = 10

export default defineConfig({
    title: "Silence's blog",
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: "Silence's blog",
    ignoreDeadLinks: true,
    appearance:'dark',
    markdown: {
	    	theme: { light: 'nord', dark: 'nord' },
		config: (md) => {
			md.use(mathjax3);
		},
	},
    vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/Silence020922', //copyright link
        // 评论的仓库地址
        //comment: {
          //  repo: 'Silence020922/Silence020922.github.io',
           // themes: 'github-light',
            //issueTerm: 'pathname'
        //},
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local',
        },
        //outline:[2,3],
        outlineTitle: '文章摘要',
       // socialLinks: [{ icon: 'github', link: 'https://github.com/Silence020922/Silence020922.github.io' }]
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
})
