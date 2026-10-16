export interface ViewerOptions { wasmUrl?: string; cssUrl?: string; /** 初始展开缩略图，默认 true */ showThumbnails?: boolean }
export interface Viewer { open(file: File): Promise<void>; openUrl(src: string): Promise<void>; destroy(): void }
export declare function createViewer(container: HTMLElement, options?: ViewerOptions): Viewer;
export declare const usdoc: Readonly<{ ofd: Readonly<{ createViewer: typeof createViewer }> }>;
