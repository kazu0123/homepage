import type { Asset, UnresolvedLink } from 'contentful';

export function isResolvedAssetWithFile(
	asset: UnresolvedLink<'Asset'> | Asset<undefined, string> | undefined
): asset is Asset<undefined, string> & { fields: { file: { url: string } } } {
	if (!asset) {
		return false;
	}

	const resolvedAsset = asset as Asset<undefined, string>;

	if (!resolvedAsset.fields) {
		return false;
	}

	if (!resolvedAsset.fields.file) {
		return false;
	}

	if (!resolvedAsset.fields.file.url) {
		return false;
	}

	return true;
}
