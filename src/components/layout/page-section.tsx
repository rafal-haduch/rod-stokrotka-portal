import { BrandColorRole, SizeScale } from '@/shared/types/scale';
import { cn } from '@/shared/utils/cn';
import React, { ReactNode } from 'react';

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
    small: 'px-4',
    medium: 'px-8',
    large: 'px-12 md:px-16',
};

interface PageSectionStyleOptions {
    /** Sets the section's top padding. */
    topPadding: SectionPadding;

    /** Sets the section's bottom padding. */
    bottomPadding: SectionPadding;

    /** Sets the section's horizontal padding. */
    horizontalPadding: SectionPadding;
}

/** Combines the section's vertical padding and background classes. */
function pageSectionStyles({
    topPadding,
    bottomPadding,
    horizontalPadding,
}: PageSectionStyleOptions) {
    return cn(
        pageSectionTopPaddingStyles[topPadding],
        pageSectionBottomPaddingStyles[bottomPadding],
        pageSectionHorizontalPaddingStyles[horizontalPadding]
    );
}

/**
 * Predefined vertical padding combinations for common section positions.
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
} satisfies Record<PageSectionPreset, Partial<PageSectionStyleOptions>>;

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
    /** Vertical padding above the section content. Defaults to `lg`. */
    topPadding?: SectionPadding;

    /** Vertical padding below the section content. Defaults to `lg`. */
    bottomPadding?: SectionPadding;

    /** Vertical padding  section content. Defaults to `lg`. */
    horizontalPadding?: SectionPadding;

    children: ReactNode;
}

/**
 * Constrains a page section's vertical padding and background.
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
        <>
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
        </>
    );
}
