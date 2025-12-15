/// <reference types="vite-imagetools/client" />

// Handle all image imports with query parameters
declare module '*.png?format=webp&quality=75' {
  const src: string;
  export default src;
}

declare module '*.png?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*.jpg?format=webp&quality=75' {
  const src: string;
  export default src;
}

declare module '*.jpg?format=webp&quality=80' {
  const src: string;
  export default src;
}

// Generic fallbacks
declare module '*.png?*' {
  const src: string;
  export default src;
}

declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.webp?*' {
  const src: string;
  export default src;
}

declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=webp' {
  const src: string;
  export default src;
}
