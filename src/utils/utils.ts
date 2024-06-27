export function hexToRgbFigma(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255,
    g = parseInt(hex.slice(3, 5), 16) / 255,
    b = parseInt(hex.slice(5, 7), 16) / 255,
    a = 1;
  return { r, g, b, a };
}

export function interpolateColor(startColor, endColor, factor) {
  return {
    r: startColor.r + factor * (endColor.r - startColor.r),
    g: startColor.g + factor * (endColor.g - startColor.g),
    b: startColor.b + factor * (endColor.b - startColor.b),
    a: 1, // Assuming full opacity for simplicity
  };
}
