'use client';

import { useState } from 'react';

import { cn } from '@components/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover';
import { buildShareUrls } from '@utils/share-utils';

type SharePostProps = {
  url: string;
  className?: string;
};

type ShareMenuLinkProps = {
  href: string;
  label: string;
  ariaLabel: string;
  iconName?: string;
};

/**
 * Share post component
 * @param url - The URL to share
 * @param className - The class name of the
 * @returns Share post component
 */
export const SharePost = ({ url, className }: SharePostProps) => {
  const [copied, setCopied] = useState(false);
  const { xUrl, facebookUrl, linkedinUrl } = buildShareUrls(url);

  const handleCopyLink = async () => {
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      console.error('[SharePost]: Failed to copy link');
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer',
            className
          )}
          aria-label="Share this post"
        >
          <span className="material-symbol" aria-hidden="true">
            ios_share
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-56 p-1">
        <div className="flex flex-col" role="menu" aria-label="Share options">
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
            role="menuitem"
            aria-label="Copy link"
          >
            <span className="material-symbol">link</span>
            {copied ? 'Link copied! 🎉' : 'Copy link'}
          </button>

          <div className="my-1 h-px w-full bg-border" />

          <ShareMenuLink href={xUrl} label="Share on X" ariaLabel="Share on X" />

          <ShareMenuLink href={facebookUrl} label="Share on Facebook" ariaLabel="Share on Facebook" />

          <ShareMenuLink href={linkedinUrl} label="Share on LinkedIn" ariaLabel="Share on LinkedIn" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

/**
 * Share menu link component
 * @param href - The href of the link
 * @param label - The label of the link
 * @param ariaLabel - The aria label of the link
 * @param iconName - The icon name of the link
 * @returns Share menu link component
 */
const ShareMenuLink = ({ href, label, ariaLabel, iconName }: ShareMenuLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
      )}
      role="menuitem"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {iconName ? (
        <span className="material-symbol" aria-hidden="true">
          {iconName}
        </span>
      ) : null}
      {label}
    </a>
  );
};
