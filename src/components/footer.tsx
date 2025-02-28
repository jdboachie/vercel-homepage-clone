import React from 'react';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './mode-toggle';


function GitHubIcon ({className}:{className: string}) {
  return (
    <svg className={className} data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.46252C4.40875 1.46252 1.5 4.37029 1.5 7.96032C1.5 10.8356 3.36062 13.2642 5.94438 14.1251C6.26937 14.182 6.39125 13.987 6.39125 13.8165C6.39125 13.6621 6.38313 13.1504 6.38313 12.6063C4.75 12.9068 4.3275 12.2083 4.1975 11.8428C4.12437 11.6559 3.8075 11.0793 3.53125 10.9249C3.30375 10.8031 2.97875 10.5026 3.52312 10.4945C4.035 10.4863 4.40062 10.9656 4.5225 11.1605C5.1075 12.1433 6.04188 11.8671 6.41563 11.6966C6.4725 11.2742 6.64313 10.9899 6.83 10.8275C5.38375 10.665 3.8725 10.1046 3.8725 7.61919C3.8725 6.91255 4.12438 6.32775 4.53875 5.87291C4.47375 5.71046 4.24625 5.04444 4.60375 4.15099C4.60375 4.15099 5.14812 3.98042 6.39125 4.81701C6.91125 4.67081 7.46375 4.59771 8.01625 4.59771C8.56875 4.59771 9.12125 4.67081 9.64125 4.81701C10.8844 3.9723 11.4288 4.15099 11.4288 4.15099C11.7863 5.04444 11.5588 5.71046 11.4938 5.87291C11.9081 6.32775 12.16 6.90443 12.16 7.61919C12.16 10.1127 10.6406 10.665 9.19438 10.8275C9.43 11.0305 9.63313 11.4204 9.63313 12.0296C9.63313 12.8987 9.625 13.5972 9.625 13.8165C9.625 13.987 9.74687 14.1901 10.0719 14.1251C11.3622 13.6896 12.4835 12.8606 13.2779 11.7547C14.0722 10.6488 14.4997 9.32178 14.5 7.96032C14.5 4.37029 11.5913 1.46252 8 1.46252Z" fill="currentColor"></path></svg>
  )
}

function LinkedInIcon ({className}:{className: string}) {
  return (
    <svg className={className} data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5ZM4.74556 5.5C5.21057 5.5 5.5 5.16665 5.5 4.75006C5.49133 4.3241 5.21057 4 4.75438 4C4.29824 4 4 4.3241 4 4.75006C4 5.16665 4.28937 5.5 4.73687 5.5H4.74556ZM5.5 6.5V12H4V6.5H5.5ZM7 12H8.5V8.89479C8.5 8.89479 8.60415 7.78962 9.55208 7.78962C10.5 7.78962 10.5 9.02275 10.5 9.02275V12H12V8.8133C12 7.13837 11.25 6.5025 10.125 6.5025C9 6.5025 8.5 7.27778 8.5 7.27778V6.5025H7.00005C7.02383 7.01418 7 12 7 12Z" fill="currentColor"></path></svg>
  )
}

function TwitterIcon ({className}:{className: string}) {
  return (
    <svg className={className} data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z" fill="currentColor"></path></svg>
  )
}

function YouTubeIcon ({className}:{className: string}) {
  return (
    <svg className={className} data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M13.4695 3.39273C14.0722 3.55407 14.5459 4.02773 14.7073 4.63046C14.9988 5.72183 15 8.00023 15 8.00023C15 8.00023 15 10.2786 14.7073 11.37C14.5459 11.9728 14.0722 12.4464 13.4695 12.6077C12.3782 12.9005 7.99998 12.9005 7.99998 12.9005C7.99998 12.9005 3.62183 12.9005 2.53045 12.6077C1.92773 12.4464 1.45407 11.9728 1.29272 11.37C1 10.2786 1 8.00023 1 8.00023C1 8.00023 1 5.72183 1.29272 4.63046C1.45407 4.02773 1.92773 3.55407 2.53045 3.39273C3.62183 3.10001 7.99998 3.10001 7.99998 3.10001C7.99998 3.10001 12.3782 3.10001 13.4695 3.39273ZM10.2362 8.00046L6.59906 10.1002V5.90068L10.2362 8.00046Z" fill="currentColor"></path></svg>
  )
}

const productLinks: LinkstItemProps[] = [
  {
    href: 'https://vercel.com/ai',
    children: 'AI'
  },
  {
    href: 'https://vercel.com/enterprise',
    children: 'Enterprise'
  },
  {
    href: 'https://vercel.com/fluid',
    children: 'Fluid Compute'
  },
  {
    href: 'https://vercel.com/solutions/nextjs',
    children: 'Next.js'
  },
  {
    href: 'https://vercel.com/products/observability',
    children: 'Observability'
  },
  {
    href: 'https://vercel.com/products/previews',
    children: 'Previews'
  },
  {
    href: 'https://vercel.com/products/rendering',
    children: 'Rendering'
  },
  {
    href: 'https://vercel.com/security',
    children: 'Security'
  },
  {
    href: 'https://vercel.com/turbo',
    children: 'Turbo'
  },
  {
    href: 'https://v0.dev',
    children:<p className='flex items-center gap-1'>v0 <SquareArrowOutUpRight className='size-3' /></p>,
  },
]

const resourceLinks: LinkstItemProps[] = [
  {
    href: 'https://vercel.community',
    children: <p className='flex items-center gap-1'>Community <SquareArrowOutUpRight className='size-3' /></p>,
  },
  {
    href: 'https://vercel.com/docs',
    children: 'Docs',
  },
  {
    href: 'https://vercel.com/guides',
    children: 'Guides',
  },
  {
    href: 'https://vercel.com/help',
    children: 'Help',
  },
  {
    href: 'https://vercel.com/integrations',
    children: 'Integrations',
  },
  {
    href: 'https://vercel.com/pricing',
    children: 'Pricing',
  },
  {
    href: 'https://vercel.com/resources',
    children: 'Resources',
  },
  {
    href: 'https://vercel.com/partners/solution-partners',
    children: 'Solution Partners',
  },
  {
    href: 'https://vercel.com/templates',
    children: 'Templates',
  },
]

const companyLinks: LinkstItemProps[] = [
  {
    href: 'https://vercel.com/about',
    children: 'About'
  },
  {
    href: 'https://vercel.com/blog',
    children: 'Blog'
  },
  {
    href: 'https://vercel.com/careers',
    children: 'Careers'
  },
  {
    href: 'https://vercel.com/changelog',
    children: 'Changelog'
  },
  {
    href: 'https://vercel.com/contact',
    children: 'Contact Us'
  },
  {
    href: 'https://vercel.com/customers',
    children: 'Customers'
  },
  {
    href: 'https://vercel.com/partners',
    children: 'Partners'
  },
  {
    href: 'https://vercel.com/legal/privacy-policy',
    children: 'Privacy Policy'
  },
]

const socialLinks: LinkstItemProps[] = [
  {
    href: '',
    children: <p className="flex gap-2 items-center"><GitHubIcon className='size-4' /> GitHub</p>
  },
  {
    href: '',
    children: <p className="flex gap-2 items-center"><LinkedInIcon className='size-4' /> LinkedIn</p>
  },
  {
    href: '',
    children: <p className="flex gap-2 items-center"><TwitterIcon className='size-4' /> Twitter</p>
  },
  {
    href: '',
    children: <p className="flex gap-2 items-center"><YouTubeIcon className='size-4' /> YouTube</p>
  },
]

const Links = () => {
  return (
    <div className='flex max-lg:flex-col-reverse max-lg:gap-16 col-span-2'>
      <div className='grid grid-cols-2 max-lg:gap-12 lg:grid-cols-4 grow text-sm text-[13.8px]'>
        <div>
          <p className="pb-4">Products</p>
          <ul className='text-muted-foreground grid gap-3'>
            {productLinks.map((link, index) => (
              <LinkstItem
                key={index}
                href={link.href}
              >
                {link.children}
              </LinkstItem>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-4">Resources</p>
          <ul className='text-muted-foreground grid gap-3'>
            {resourceLinks.map((link, index) => (
              <LinkstItem
                key={index}
                href={link.href}
              >
                {link.children}
              </LinkstItem>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-4">Company</p>
          <ul className='text-muted-foreground grid gap-3'>
            {companyLinks.map((link, index) => (
              <LinkstItem
                key={index}
                href={link.href}
              >
                {link.children}
              </LinkstItem>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-4">Social</p>
          <ul className='text-muted-foreground grid gap-3.5'>
            {socialLinks.map((link, index) => (
              <LinkstItem
                key={index}
                href={link.href}
              >
                {link.children}
              </LinkstItem>
            ))}
          </ul>
        </div>
      </div>
      <div className='grid lg:justify-end items-start lg:ml-16'>
        <Link href={'https://vercel.come/home'}>
          <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" aria-label="Vercel logo"><path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>
        </Link>
      </div>
    </div>
  )
}

interface LinkstItemProps {
  href: string
  children: React.ReactNode
}

function LinkstItem ({href, children}: LinkstItemProps) {
  return (
    <li>
      <Link href={href} className='hover:text-primary leading-[20px]'>{children}</Link>
    </li>
  )
}

function VercelStatus () {
  return (
    <Button variant={'ghost'} size={'sm'} className='cursor-pointer text-blue-500 hover:text-blue-500'>
      <div className='size-2 bg-blue-500 rounded-full' />
      All systems normal
    </Button>
  )
}

function Footer () {
  return (
    <footer className='grid grid-cols-2 gap-8 w-full col-span-2 max-w-[1345px] mt-12 lg:mt-24'>
      <Links />
      <div className='col-span-2 flex justify-between items-center '>
        <VercelStatus />
        {/* <ModeToggle /> */}
        <ThemeToggle />
      </div>
    </footer>
  )
}

export default Footer