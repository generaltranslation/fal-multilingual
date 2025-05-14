export type ProviderKey = "fal";
export type ModelMode = "performance" | "quality";

export const PROVIDERS: Record<
  ProviderKey,
  {
    displayName: string;
    iconPath: string;
    color: string;
    models: string[];
  }
> = {
  fal: {
    displayName: "Fal",
    iconPath: "/provider-icons/fal.svg",
    color: "from-orange-500 to-red-500",
    models: [
      "fal-ai/flux/dev",
      "fal-ai/fast-sdxl",
      "fal-ai/flux-pro/v1.1-ultra",
      "fal-ai/ideogram/v2",
      "fal-ai/recraft-v3",
      "fal-ai/hyper-sdxl",
    ],
  },
};

export const MODEL_CONFIGS: Record<ModelMode, Record<ProviderKey, string>> = {
  performance: {
    fal: "fal-ai/fast-sdxl",
  },
  quality: {
    fal: "fal-ai/flux-pro/v1.1-ultra",
  },
};

export const PROVIDER_ORDER: ProviderKey[] = ["fal"];

export const initializeProviderRecord = <T>(defaultValue?: T) =>
  Object.fromEntries(
    PROVIDER_ORDER.map((key) => [key, defaultValue]),
  ) as Record<ProviderKey, T>;
