"use client";

import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageDisplay } from "./ImageDisplay";
import { cn } from "@/lib/utils";
import { ProviderKey } from "@/lib/provider-config";
import { GeneratedImage, ProviderTiming } from "@/lib/image-types";
import { Var, T } from "gt-next";

interface ImageCarouselProps {
	providers: ProviderKey[];
	images: GeneratedImage[];
	timings: Record<ProviderKey, ProviderTiming>;
	failedProviders: ProviderKey[];
	enabledProviders: Record<ProviderKey, boolean>;
	providerToModel: Record<ProviderKey, string>;
}

export function ImageCarousel({
	providers,
	images,
	timings,
	failedProviders,
	enabledProviders,
	providerToModel,
}: ImageCarouselProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) return;

		api.on("select", () => {
			setCurrentSlide(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className="relative w-full">
			<Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
				<CarouselContent>
					{providers.map((provider, i) => {
						const imageData = images?.find(
							(img) => img.provider === provider,
						)?.image;
						const timing = timings[provider];

						return (
							<T key={provider} id="components.imagecarousel.0">
								<CarouselItem>
									<ImageDisplay
										modelId={
											images?.find((img) => img.provider === provider)
												?.modelId || providerToModel[provider]
										}
										provider={provider}
										image={imageData}
										timing={timing}
										failed={failedProviders.includes(provider)}
										enabled={enabledProviders[provider]}
									/>

									<div className="text-center text-sm text-muted-foreground mt-4">
										<Var>{i + 1}</Var> of <Var>{providers.length}</Var>
									</div>
								</CarouselItem>
							</T>
						);
					})}
				</CarouselContent>

				<CarouselPrevious className="left-0 bg-background/80 backdrop-blur-sm" />
				<CarouselNext className="right-0 bg-background/80 backdrop-blur-sm" />
			</Carousel>

			{/* Dot Indicators */}
			<div className="absolute -bottom-6 left-0 right-0">
				<div className="flex justify-center gap-1">
					{providers.map((_, index) => (
						<T key={index} id="components.imagecarousel.1">
							<button
								className={cn(
									"h-1.5 rounded-full transition-all",
									index === currentSlide
										? "w-4 bg-primary"
										: "w-1.5 bg-primary/50",
								)}
								onClick={() => api?.scrollTo(index)}
							>
								<span className="sr-only">
									Go to image <Var>{index + 1}</Var>
								</span>
							</button>
						</T>
					))}
				</div>
			</div>
		</div>
	);
}
