/// <reference types="vite-imagetools/client" />

declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp&quality=*' {
  const src: string;
  export default src;
}

declare module '*&format=webp' {
  const src: string;
  export default src;
}

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
