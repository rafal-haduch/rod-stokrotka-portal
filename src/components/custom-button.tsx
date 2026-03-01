import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

// Base Types of Props

type sizeButton = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type contextButton = 'iconSquare' | 'iconRectangle' | 'table';

type variantButton = 'primary' | 'secondary' | 'outline' | 'ghost' | 'action' | 'danger';

// Mapper Base Types of Props into CSS classnames

const sizeClasses: Record<sizeButton, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
} as const;

const contextClasses: Record<contextButton, string> = {
    iconSquare: 'btn-square-icon',
    iconRectangle: 'btn-rectangle-icon',
    table: 'btn-in-table',
} as const;

const variantClasses: Record<variantButton, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    action: 'btn-action',
    danger: 'btn-danger',
} as const;

// Custom Button Props

type BaseProps = {
    children: ReactNode;
    variant: variantButton;
    size?: sizeButton;
    context?: contextButton;
    className?: string;
};

type ButtonProps = BaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        type: 'button' | 'submit';
    };

type InternalLinkProps = BaseProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        external?: false;
    };

type ExternalLinkProps = BaseProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        external: true;
    };

type Props = ButtonProps | InternalLinkProps | ExternalLinkProps;

export function CustomButton(props: Props) {
    const { size, variant, context, className, children } = props;

    const classes = clsx(
        'btn',
        size && sizeClasses[size],
        context && contextClasses[context],
        variantClasses[variant],
        className
    );

    if (!('href' in props) && props.type) {
        const {
            type = 'button',
            size: _s,
            variant: _v,
            context: _c,
            className: _cn,
            children: _ch,
            ...restButtonProps
        } = props;

        return (
            <button type={type} className={classes} {...restButtonProps}>
                {children}
            </button>
        );
    }

    // From this point on, TS knows that we have a link.
    const {
        href,
        external,
        size: _size,
        variant: _variant,
        context: _context,
        className: _className,
        children: _children,
        ...restLinkProps
    } = props;

    const Component = external ? 'a' : Link;

    return (
        <Component href={href} className={classes} {...restLinkProps}>
            {children}
        </Component>
    );
}
