export const useFadeIn = (duration = 1, delay) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    current.style.opacity = 1;
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
