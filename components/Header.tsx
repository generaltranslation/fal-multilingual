import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="mb-4">
      <div className="mx-auto flex justify-between items-center">
        <div>
          <div className="flex flex-row items-center gap-2 shrink-0 ">
            <span className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-2 home-links">
              <Link
                className="text-zinc-800 dark:text-zinc-100 -translate-y-[.5px]"
                rel="noopener"
                target="_blank"
                href="https://vercel.com/"
              >
                <svg
                  data-testid="geist-icon"
                  height={18}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={18}
                  style={{ color: "currentcolor" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 1L16 15H0L8 1Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div className="jsx-e3e12cc6f9ad5a71 w-4 text-lg text-center text-zinc-300 dark:text-zinc-600">
                <svg
                  data-testid="geist-icon"
                  height={16}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={16}
                  style={{ color: "currentcolor" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-4">
                <Link
                  className="flex flex-row items-end gap-2"
                  target="_blank"
                  href="https://fal.ai"
                >
                  <FalIcon size={18} />
                </Link>
              </div>
              <div className="ml-4 text-zinc-800 dark:text-zinc-100 text-xl font-semibold">Image Generator</div>
            </span>
          </div>
        </div>
        <Link
          href={`https://vercel.com/new/clone?project-name=FAL+x+Vercel+Image+Generator&repository-name=vercel-fal-image-generator&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fvercel-fal-image-generator&demo-title=FAL+x+Vercel+Image+Generator&demo-url=https%3A%2F%2Ffal-image-generator.vercel.app%2F&demo-description=An+open-source+AI+image+generation+app+template+built+with+Next.js%2C+the+AI+SDK+by+Vercel%2C+and+FAL&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22ai%22%2C%22productSlug%22%3A%22fal%22%2C%22integrationSlug%22%3A%22fal%22%7D%5D`}
          target="_blank"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://vercel.com/button"
            className="hidden sm:block"
            alt="Deploy with Vercel"
          />
          <Button size="iconSm" className="block sm:hidden">
            ▲
          </Button>
        </Link>
      </div>
    </header>
  );
};

export const FalIcon = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 170 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M109.571 0.690002C112.515 0.690002 114.874 3.08348 115.155 6.01352C117.665 32.149 138.466 52.948 164.603 55.458C167.534 55.7394 169.927 58.0985 169.927 61.042V110.255C169.927 113.198 167.534 115.557 164.603 115.839C138.466 118.349 117.665 139.148 115.155 165.283C114.874 168.213 112.515 170.607 109.571 170.607H60.3553C57.4116 170.607 55.0524 168.213 54.7709 165.283C52.2608 139.148 31.4601 118.349 5.32289 115.839C2.39266 115.557 -0.000976562 113.198 -0.000976562 110.255V61.042C-0.000976562 58.0985 2.39267 55.7394 5.3229 55.458C31.4601 52.948 52.2608 32.149 54.7709 6.01351C55.0524 3.08348 57.4116 0.690002 60.3553 0.690002H109.571ZM34.1182 85.5045C34.1182 113.776 57.0124 136.694 85.2539 136.694C113.495 136.694 136.39 113.776 136.39 85.5045C136.39 57.2332 113.495 34.3147 85.2539 34.3147C57.0124 34.3147 34.1182 57.2332 34.1182 85.5045Z"
        fill="currentColor"
      />
    </svg>
  );
};
