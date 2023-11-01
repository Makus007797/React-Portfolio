export const Animate = {
  hiden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}

export default Animate
