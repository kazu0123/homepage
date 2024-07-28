import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TechnologyFields {
  name: EntryFieldTypes.Symbol;
  icon?: EntryFieldTypes.Symbol;
}

export type TechnologySkeleton = EntrySkeletonType<TechnologyFields, "technology">;
export type Technology<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TechnologySkeleton, Modifiers, Locales>;
