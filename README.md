<a href="https://fal-image-generator.vercel.app">
  <h1 align="center">Fal x Vercel Image Generator</h1>
</a>

<p align="center">
  An open-source AI image generation app template built with Next.js, the AI SDK by Vercel, and Fal.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Supports image generation using [`generateImage`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/generate-image) from the [AI SDK by Vercel](https://sdk.vercel.ai/docs), allowing multiple AI providers to be used interchangeably with just a few lines of code.
- A single input to generate images across multiple models simultaneously.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router (version 15).

## Deploy Your Own

You can deploy your own version of the AI SDK Image Generator to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=FAL+x+Vercel+Image+Generator&repository-name=vercel-fal-image-generator&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fvercel-fal-image-generator&demo-title=FAL+x+Vercel+Image+Generator&demo-url=https%3A%2F%2Ffal-image-generator.vercel.app%2F&demo-description=An+open-source+AI+image+generation+app+template+built+with+Next.js%2C+the+AI+SDK+by+Vercel%2C+and+FAL&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22ai%22%2C%22productSlug%22%3A%22fal%22%2C%22integrationSlug%22%3A%22fal%22%7D%5D)

## Running Locally

1. Clone the repository and install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Install the [Vercel CLI](https://vercel.com/docs/cli):

   ```bash
   npm i -g vercel
   # or
   yarn global add vercel
   # or
   pnpm install -g vercel
   ```

   Once installed, link your local project to your Vercel project:

   ```bash
   vercel link
   ```

   After linking, pull your environment variables:

   ```bash
   vercel env pull
   ```

   This will create a `.env.local` file with all the necessary environment variables.

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new AI chatbot application.

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors.

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
