export type LinkProps = {
    id?: number,
    title: string,
    href: string
}

export type NavItemProps = { 
    title: string
    href: string 
    asSubLink: boolean 
    subLinks?: Array<LinkProps>
}