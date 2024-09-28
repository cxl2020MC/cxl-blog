import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeShikiji from 'rehype-shikiji'

import { unified } from 'unified'

const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShikiji, {
        themes: {
            default: 'github-light',
            light: 'github-light',
            dark: 'github-dark'
        },
    })
    .use(rehypeStringify)

// const value = '# Pluto\n\n**Pluto** (minor-planet designation: *13434…'
// const file = await processor.process(value)

// console.log(String(file))

export default function renderMarkdown(markdown: string) {
    return String(processor.processSync(markdown))
}