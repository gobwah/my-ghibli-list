const colors = {
  primary: '#079DEC',
  secondary: '#282C34',
  applyAlpha: (color, alpha) =>
    color === colors.primary
      ? `rgba(7, 157, 236, ${alpha})`
      : `rgba(40, 44, 52, ${alpha})`,
}

export default colors
