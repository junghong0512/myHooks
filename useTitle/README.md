# Usage

```js
const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTItle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTItle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 5000);
  return (
    <div className="app">
      <div>Hello</div>
    </div>
  );
};

};