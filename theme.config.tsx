import { ThemeConfig } from 'nextra'

export default {
    logo: (
        <span className="flex items-end">
            <img className="mr-2" width="48" src="/images/logo.png" />
            <p>Lettuce Yogurt | 令和の新卒エンジニア</p>
        </span>
    ),
    project: {
        link: 'https://github.com/techbookfest-LettuceYogurt/techbookfest17-portal',
    },
    // ... other theme options
} satisfies ThemeConfig
