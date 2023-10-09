export type navigationLinkProps = {
    text: string
    href: string
    isDropDow: boolean
    subLinks?: Array<{
        id: number
        text: string
        href: string
    }>
}