# Usage

```js
const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteCorona = () => console.log("Deleting the Corona...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteCorona, abort);
  return (
    <div className="app">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delete the Corona</button>
    </div>
  );
};

