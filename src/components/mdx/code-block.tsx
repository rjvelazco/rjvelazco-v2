'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@components/utils';

type CodeBlockProps = React.ComponentPropsWithoutRef<'pre'>;

async function copyToClipboard(text: string) {
  // Modern API (no execCommand fallback; deprecated).
  if (!navigator.clipboard?.writeText) throw new Error('Clipboard API not available');
  await navigator.clipboard.writeText(text);
}

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const onCopy = async () => {
    const pre = preRef.current;
    const codeEl = pre?.querySelector('code');
    const text = (codeEl?.textContent ?? pre?.textContent ?? '').trimEnd();
    if (!text) return;

    try {
      await copyToClipboard(text);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // Clipboard can still fail due to permissions/user gesture policies.
      setCopied(false);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
      <div className="flex items-center justify-between bg-zinc-950/80 px-4 py-3 text-zinc-100">
        <div className="text-sm font-medium text-zinc-200">Terminal</div>

        <button
          type="button"
          onClick={onCopy}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2',
            'text-zinc-200 hover:bg-white/10 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          )}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden="true">
            {copied ? 'check' : 'content_copy'}
          </span>
        </button>
      </div>

      <pre
        ref={preRef}
        className={cn(
          // Fit nicely inside the wrapper (no extra rounding since wrapper handles it).
          'mt-0 rounded-none border-0',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
