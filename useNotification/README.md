# Usage 

```js
const useNotification = (title, options) => {
  if (!"Notification" in window) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      return new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("useNotification Testing...", {
    body: "testing the body option!!"
  });
  return (
    <div className="app" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
};