import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

import type { TechnologySkeleton } from "./Technology";

export interface ProjectFields {
    title: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.Text;
    technologies?: EntryFieldTypes.EntryLink<TechnologySkeleton>;
    link?: EntryFieldTypes.Symbol;
}

export type ProjectSkeleton = EntrySkeletonType<ProjectFields, "project">;
export type Project<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<ProjectSkeleton, Modifiers, Locales>;
