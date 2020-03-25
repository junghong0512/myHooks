export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTItle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTItle, [title]);
  return setTitle;
};
