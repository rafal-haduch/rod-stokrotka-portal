'use client';

import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface MultiSelectOption {
    id: number;
    label: string;
    disabled?: boolean;
}

interface Props {
    name: string; // np. "plotIds"
    options: MultiSelectOption[]; // lista dostępnych opcji
    initialSelectedIds?: number[]; // już przypisane
    className?: string;
}

export function MultiSelectDropdown({ name, options, initialSelectedIds = [], className }: Props) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<number[]>(initialSelectedIds);
    const ref = useRef<HTMLDivElement>(null);

    function toggle(id: number) {
        setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }

    // Click outside the component
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const selectedLabels = options.filter((o) => selected.includes(o.id)).map((o) => o.label);

    return (
        <div ref={ref} className="relative col-span-3 w-full">
            {/* trigger */}
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className={cn(
                    'border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary w-full rounded-md border px-3 py-2 shadow-sm hover:cursor-pointer focus:outline-none',
                    className
                )}
            >
                {selected.length === 0 ? (
                    <span className="flex items-center justify-between">
                        Kliknij aby rozwinąć <ChevronDown />
                    </span>
                ) : (
                    <span className="flex items-center justify-between">
                        {selectedLabels.join(', ')} <ChevronDown />
                    </span>
                )}
            </button>

            {/* dropdown */}
            {open && (
                <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-white shadow">
                    {options.map((opt) => (
                        <label
                            key={opt.id}
                            className={`flex items-center gap-2 px-3 py-1 text-slate-700 ${opt.disabled ? 'opacity-50' : 'cursor-pointer hover:bg-gray-100'}`}
                        >
                            <input
                                type="checkbox"
                                disabled={opt.disabled}
                                checked={selected.includes(opt.id)}
                                onChange={() => toggle(opt.id)}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            )}

            {/* hidden inputs */}
            {selected.map((id) => (
                <input key={id} type="hidden" name={name} value={id} />
            ))}
        </div>
    );
}
