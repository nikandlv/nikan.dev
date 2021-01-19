export function generateAssetUrl(resource: string) {
  return `${
    process.env.NODE_ENV === "production"
      ? "https://nikandlv.github.io/nikan.dev/"
      : ""
  }${resource}`;
}
