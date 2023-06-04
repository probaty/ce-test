const isSvg = (svg: string) => {
  return svg.includes("<svg");
};

export const loadSvg = async (svg: string) => {
  if (isSvg(svg)) {
    return svg;
  }
  try {
    const response = await fetch(svg);
    const svgText = await response.text();
    if (isSvg(svgText)) {
      return svgText;
    }
    throw new Error("Invalid SVG");
  } catch (error) {
    console.error(error);
  }
};
