export const setBgColor = (color, transparency) => {
  const rgba = color.replace('#', '');
  const r = parseInt(rgba.substring(0, 2), 16);
  const g = parseInt(rgba.substring(2, 4), 16);
  const b = parseInt(rgba.substring(4, 6), 16);
  const a = 1 - (transparency / 100);
  document.documentElement.style.setProperty('--bg-color', `rgba(${r}, ${g}, ${b}, ${a})`);
}