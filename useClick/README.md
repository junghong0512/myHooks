# Usage

```js
const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("SAY HELLO");
  const title = useClick(sayHello);
  return (
    <div className="app">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};
};