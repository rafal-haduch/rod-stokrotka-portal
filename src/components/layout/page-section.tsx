import type { HTMLAttributes, ReactNode } from 'react';

import { SizeScale } from '@/shared/types/scale';
import { cn } from '@/shared/utils/cn';

type SectionPadding = SizeScale | 'none';

type PageSectionPreset = 'first' | 'between' | 'last' | 'single';

const pageSectionTopPaddingStyles: Record<SectionPadding, string> = {
    none: 'pt-0',
    small: 'pt-6',
    medium: 'pt-8',
    large: 'pt-12 md:pt-16',
};

const pageSectionBottomPaddingStyles: Record<SectionPadding, string> = {
    none: 'pb-0',
    small: 'pb-4',
    medium: 'pb-8',
    large: 'pb-12 md:pb-16',
};

const pageSectionHorizontalPaddingStyles: Record<SectionPadding, string> = {
    none: 'px-0',
    small: 'px-2',
    medium: 'px-4',
    large: 'px-6',
};

interface PageSectionStylesOptions {
    topPadding: SectionPadding;
    bottomPadding: SectionPadding;
    horizontalPadding: SectionPadding;
}

/** Builds a section's classes by `cn()` from the provided options. */
function pageSectionStyles({
    topPadding,
    bottomPadding,
    horizontalPadding,
}: PageSectionStylesOptions) {
    return cn(
        pageSectionTopPaddingStyles[topPadding],
        pageSectionBottomPaddingStyles[bottomPadding],
        pageSectionHorizontalPaddingStyles[horizontalPadding]
    );
}

/**
 * Predefined vertical padding combinations for typical section positions on a page
 */
export const PAGE_SECTION_PRESETS = {
    first: {
        topPadding: 'small',
        bottomPadding: 'medium',
    },
    between: {
        topPadding: 'medium',
        bottomPadding: 'medium',
    },
    last: {
        topPadding: 'medium',
        bottomPadding: 'large',
    },
    single: {
        topPadding: 'small',
        bottomPadding: 'large',
    },
} satisfies Record<PageSectionPreset, Partial<PageSectionStylesOptions>>;

interface PageSectionProps extends HTMLAttributes<HTMLElement> {
    topPadding?: SectionPadding;
    bottomPadding?: SectionPadding;
    horizontalPadding?: SectionPadding;
    children: ReactNode;
}

/**
 * Constrains a page section's vertical and horizontal padding .
 * Use a preset from {@link PAGE_SECTION_PRESETS} for a predefined padding combination.
 *
 * @example
 * `<PageSection {...PAGE_SECTION_PRESETS.single}>...</PageSection>`.
 *
 * @See {@link pageSectionStyles}
 */
export default function PageSection({
    topPadding = 'large',
    bottomPadding = 'large',
    horizontalPadding = 'medium',
    children,
    ...props
}: PageSectionProps) {
    return (
        <section
            className={cn(
                pageSectionStyles({
                    topPadding,
                    bottomPadding,
                    horizontalPadding,
                }),
                props.className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
