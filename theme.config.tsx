import { ThemeConfig } from 'nextra'
import Image from 'next/image'
import logo from './public/images/logo.png'

export default {
    logo: (
        <span className="flex items-end">
            <span className="mr-2">
                <Image width="48" height="48" src={logo} alt="logo" />
            </span>
            <p>Lettuce Yogurt | 令和の新卒エンジニア</p>
        </span>
    ),
    project: {
        link: 'https://github.com/techbookfest-LettuceYogurt/techbookfest17-portal',
    },
    // ... other theme options
} satisfies ThemeConfig
