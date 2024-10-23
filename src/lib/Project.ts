import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

import type { TechnologySkeleton } from "./Technology";
import { client } from "./contentful";


export interface ProjectFields {
    title: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.Text;
    link?: EntryFieldTypes.Symbol;
    technologies?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TechnologySkeleton>>;
}

export type ProjectSkeleton = EntrySkeletonType<ProjectFields, "project">;
export type Project<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<ProjectSkeleton, Modifiers, Locales>;


export const getProjects = async () => await client.getEntries<ProjectSkeleton>({ content_type: "project" });
