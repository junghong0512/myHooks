# Usage

```js

const useFullScreen = callback => {
  const element = useRef();
  const runCallback = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCallback(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are Full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="app" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://i.pinimg.com/564x/38/83/da/3883da0a76ef174663a06e32b18ebb51.jpg"
          style={{ width: "200px" }}
          alt="Building"
        />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};