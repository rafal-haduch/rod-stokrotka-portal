'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

/**
 * Renders children outside the normal React tree directly into document.body.
 *
 * Used for UI elements that must escape parent stacking/overflow contexts
 * such as modals, dialogs, tooltips, dropdowns or popovers.
 *
 * Prevents issues with z-index, overflow:hidden and scroll containers.
 * Waits for client mount to avoid SSR hydration mismatch.
 */
export  function Portal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return createPortal(children, document.body);
}
