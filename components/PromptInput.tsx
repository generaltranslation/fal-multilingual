import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp, RefreshCw } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useGT } from "gt-next/client";

type QualityMode = "performance" | "quality";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  showProviders: boolean;
  onToggleProviders: () => void;
  mode: QualityMode;
  onModeChange: (mode: QualityMode) => void;
}

export interface Suggestion {
  text: string;
  prompt: string;
}

const artStyles = ["anime", "art nouveau", "ukiyo-e", "watercolor"];

export function useBasePrompts(): Suggestion[] {
  const t = useGT();
  const basePrompts: { text: string; prompt: string }[] = [
    {
      text: t("Salamander Dusk"),
      prompt: "A salamander at dusk in a forest pond",
    },
    {
      text: t("Sultry Chicken"),
      prompt:
        "A sultry chicken peering around the corner from shadows, clearly up to no good",
    },
    {
      text: t("Cat Vercel"),
      prompt: "A cat launching its website on Vercel",
    },
    {
      text: t("Red Panda"),
      prompt:
        "A red panda sipping tea under cherry blossoms at sunset with Mount Fuji in the background",
    },
    {
      text: t("Beach Otter"),
      prompt: "A mischievous otter surfing the waves in Bali at golden hour",
    },
    {
      text: t("Badger Ramen"),
      prompt: "A pensive honey badger eating a bowl of ramen in Osaka",
    },
    {
      text: t("Zen Frog"),
      prompt:
        "A frog meditating on a lotus leaf in a tranquil forest pond at dawn, surrounded by fireflies",
    },
    {
      text: t("Macaw Love"),
      prompt:
        "A colorful macaw delivering a love letter, flying over the Grand Canyon at sunrise",
    },
    {
      text: t("Fox Painting"),
      prompt: "A fox walking through a field of lavender with a golden sunset",
    },
    {
      text: t("Armadillo Aerospace"),
      prompt:
        "An armadillo in a rocket at countdown preparing to blast off to Mars",
    },
    {
      text: t("Penguin Delight"),
      prompt: "A penguin in pajamas eating ice cream while watching television",
    },
    {
      text: t("Echidna Library"),
      prompt:
          "An echidna reading a book in a cozy library built into the branches of a eucalyptus tree",
    },
    {
      text: t("Capybara Onsen"),
      prompt:
        "A capybara relaxing in a hot spring surrounded by snow-covered mountains with a waterfall in the background",
    },
    {
      text: t("Lion Throne"),
      prompt:
        "A regal lion wearing a crown, sitting on a throne in a jungle palace, with waterfalls in the distance",
    },
    {
      text: t("Dolphin Glow"),
      prompt:
        "A dolphin leaping through a glowing ring of bioluminescence under a starry sky",
    },
    {
      text: t("Owl Detective"),
      prompt:
        "An owl wearing a monocle and top hat, solving a mystery in a misty forest at midnight",
    },
    {
      text: t("Jellyfish Cathedral"),
      prompt:
        "A jellyfish floating gracefully in an underwater cathedral made of coral and glass",
    },
    {
      text: t("Platypus River"),
      prompt: "A platypus foraging in a river with a sunset in the background",
    },
    {
      text: t("Chameleon Urban"),
      prompt:
        "A chameleon blending into a graffiti-covered wall in an urban jungle",
    },
    {
      text: t("Tortoise Oasis"),
      prompt:
        "A giant tortoise slowly meandering its way to an oasis in the desert",
    },
    {
      text: t("Hummingbird Morning"),
      prompt:
        "A hummingbird sipping nectar from a purple bougainvillea at sunrise, captured mid-flight",
    },
    {
      text: t("Polar Bear"),
      prompt:
        "A polar bear clambering onto an iceberg to greet a friendly harbor seal as dusk falls",
    },
    {
      text: t("Lemur Sunbathing"),
      prompt:
      "A ring-tailed lemur sunbathing on a rock in Madagascar in early morning light",
    },
  ];

  return basePrompts;
}
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateStyledSuggestions(basePrompts: Suggestion[], count: number = 5): Suggestion[] {
  const shuffledPrompts = shuffle(basePrompts);
  const shuffledStyles = shuffle(artStyles);

  return shuffledPrompts.slice(0, count).map((item, index) => ({
    text: item.text,
    prompt: `${item.prompt}, in the style of ${
      shuffledStyles[index % shuffledStyles.length]
    }`,
  }));
}

export function PromptInput({
  isLoading,
  onSubmit,
}: PromptInputProps) {
  const t = useGT();
  const [input, setInput] = useState("");
  const allSuggestions = useBasePrompts();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    updateSuggestions();
  }, []);

  const updateSuggestions = () => {
    setSuggestions(generateStyledSuggestions(allSuggestions, 5));
  };

  const handleSuggestionSelect = (prompt: string) => {
    setInput(prompt);
    onSubmit(prompt);
  };

  const handleSubmit = () => {
    if (!isLoading && input.trim()) {
      onSubmit(input);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && input.trim()) {
        onSubmit(input);
      }
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="bg-zinc-50 rounded-xl p-4">
        <div className="flex flex-col gap-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("Enter your prompt here")}
            rows={3}
            className="text-base bg-transparent border-none p-0 resize-none placeholder:text-zinc-500 text-[#111111] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center justify-between space-x-2">
              <button
                onClick={updateSuggestions}
                className="flex items-center justify-between px-2 rounded-lg py-1 bg-background text-sm hover:opacity-70 group transition-opacity duration-200"
              >
                <RefreshCw className="w-4 h-4 text-zinc-500 group-hover:opacity-70" />
              </button>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionSelect(suggestion.prompt)}
                  className={cn(
                    "flex items-center justify-between px-2 rounded-lg py-1 bg-background text-sm hover:opacity-70 group transition-opacity duration-200",
                    index > 2
                      ? "hidden md:flex"
                      : index > 1
                        ? "hidden sm:flex"
                        : "",
                  )}
                >
                  <span>
                    <span className="text-black text-xs sm:text-sm">
                      {suggestion.text.toLowerCase()}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-1 h-2 w-2 sm:h-3 sm:w-3 text-zinc-500 group-hover:opacity-70" />
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !input.trim()}
              className="h-8 w-8 rounded-full bg-black flex items-center justify-center disabled:opacity-50"
            >
              {isLoading ? (
                <Spinner className="w-3 h-3 text-white" />
              ) : (
                <ArrowUp className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}