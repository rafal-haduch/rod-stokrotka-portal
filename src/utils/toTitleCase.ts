export function toTitleCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function slugToTitle(slug: string) {
    return slug.replace(/-/g, ' ');
}
