# Usage 

```js
const useFadeIn = (duration = 1, delay) => {
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

const App = () => {
  const fadeInH1 = useFadeIn(3, 1);
  const fadeInP = useFadeIn(5, 6);
  return (
    <div className="app">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem junghong lalalaall</p>
    </div>
  );
};