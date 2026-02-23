import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type BaseProps = {
    children: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon' | 'table';
    variant?:
        | 'primary'
        | 'secondary'
        | 'outline'
        | 'ghost'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger';
    className?: string;
};

type ButtonProps = BaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        type: 'button' | 'submit';
    };

type LinkProps = BaseProps & {
    href: string;
};

type Props = ButtonProps | LinkProps;

export function CustomButton(props: Props) {
    const { size = 'md', variant = 'primary', className, children } = props;

    const classes = clsx(
        'btn',
        {
            'btn-xs': size === 'xs',
            'btn-sm': size === 'sm',
            'btn-md': size === 'md',
            'btn-lg': size === 'lg',
            'btn-icon': size === 'icon',
            'btn-in-table': size === 'table',

            'btn-theme-primary': variant === 'primary',
            'btn-theme-secondary': variant === 'secondary',
            'btn-theme-outline': variant === 'outline',
            'btn-theme-ghost': variant === 'ghost',
            'btn-info': variant === 'info',
            'btn-success': variant === 'success',
            'btn-warning': variant === 'warning',
            'btn-danger': variant === 'danger',
        },
        className
    );

    if ('href' in props) {
        return (
            <Link href={props.href} className={classes}>
                {children}
            </Link>
        );
    }

    // tutaj TS już wie, że to ButtonProps
    const { type = 'button', ...buttonProps } = props;

    return (
        <button {...props} className={classes}>
            {children}
        </button>
    );
}
