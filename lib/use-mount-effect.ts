"use client";

import { type EffectCallback, useEffect } from "react";

/** Runs once after mount; the only sanctioned effect boundary in this app. */
export function useMountEffect(fn: EffectCallback) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: mount-only by contract
  useEffect(fn, []);
}
