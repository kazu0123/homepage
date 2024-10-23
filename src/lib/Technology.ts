import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode, UnresolvedLink } from "contentful";

export interface TechnologyFields {
  name: EntryFieldTypes.Symbol;
  icon?: EntryFieldTypes.Symbol;
  link?: EntryFieldTypes.Symbol;
}

export type TechnologySkeleton = EntrySkeletonType<TechnologyFields, "technology">;
export type Technology<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TechnologySkeleton, Modifiers, Locales>;


export function isResolvedTechnologyEntry(
  entry: UnresolvedLink<"Entry"> | Entry<TechnologySkeleton, undefined, string> | undefined
): entry is Entry<TechnologySkeleton, undefined, string> {
  if (typeof entry == "undefined") return false

  const resolvedEntry = entry as Entry<TechnologySkeleton, undefined, string>;

  if (typeof resolvedEntry == "undefined") return false

  return true
}
