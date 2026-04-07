/** Brand color rgb(20, 120, 100). Keep in sync with `--primary-rgb` in `app/globals.css`. */
export const PRIMARY_RGB = [20, 120, 100] as const;

/** For Canvas/WebGL, inline styles, and other APIs that need a resolved color string. */
export const primaryColor = `rgb(${PRIMARY_RGB.join(", ")})`;

/**
 * Comma-separated channels for template strings like `rgba(${primaryRgbChannels}, 0.5)`.
 */
export const primaryRgbChannels = PRIMARY_RGB.join(", ");
