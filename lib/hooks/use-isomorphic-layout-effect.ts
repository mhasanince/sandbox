import { useEffect, useLayoutEffect } from 'react';

/**
 * useIsomorphicLayoutEffect for SSR/CSR compatibility
 * Uses useLayoutEffect on client, useEffect on server
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
