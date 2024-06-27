import { hexToRgbFigma, interpolateColor } from '../utils/utils';

figma.showUI(__html__, { width: 350, height: 400 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-gradient') {
    const nodes = [];

    for (let i = 0; i < msg.gradientCount; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;

      // Calculate intermediate stops based on smoothness
      let stops = [];
      const smoothnessFactor = msg.smoothness || 50; // Default if undefined
      const step = 1 / smoothnessFactor; // Smaller steps mean more stops

      for (let s = 0; s <= 1; s += step) {
        const color = interpolateColor(hexToRgbFigma(msg.startColor), hexToRgbFigma(msg.endColor), s);
        stops.push({ color, position: s });
      }

      const newFill: Paint = {
        type: 'GRADIENT_LINEAR',
        gradientTransform: [
          [1, 0, 0],
          [0, 1, 0],
        ], 
        gradientStops: stops,
      };

      rect.fills = [newFill];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    figma.ui.postMessage({
      type: 'create-gradient',
      message: `Created ${msg.gradientCount} rectangles with dynamic smoothness.`,
    });
  }

  figma.closePlugin();
};
