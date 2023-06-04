const isSvg = (svg: string) => {
  const reg = /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/gi
  return reg.test(svg)
};

export const loadSvg = async (svg: string) => {
  if (isSvg(svg)) {
    return svg;
  }

  const response = await fetch(svg);
  const svgText = await response.text();
  if (isSvg(svgText)) {
    return svgText;
  }
  throw new Error(`Invalid SVG: ${svg}`);
}
