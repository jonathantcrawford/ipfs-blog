# IPFS Blog Starter

- Vite
- MDX
- Fleek
- SCSS
- Font Awesome Icons
- Custom Fonts
- Meta Tags
- Animated Routing
- Asset Directories
## Setup
- Clone this repo
- install dependencies `yarn`
- run `yarn dev`
- Follow the steps in TODO.md

## Assets
There are two locations for assets.
1. `public/assets/static`
Place assets here when you need the asset url to be static.
2. `src/assets/`
Place assets here that are referenced in code. Vite generates new file names for each asset during every rebuild.
When referencing these assets make sure to import them in the following way.
`import Screenshot_1URL from "@/assets/images/how-to-host-a-site-on-ipfs/screenshot_1.png";`
Vite will compile your code with the correct dynamically generated filename.
For non-image file extensions import them with a `?url` at the end.
`import GLTFURL from "@/assets/gltf/3d_model.gltf?url";`