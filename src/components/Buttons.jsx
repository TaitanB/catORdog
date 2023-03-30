export const Buttons = ({ selectCat, selectDog }) => {
  return (
    <div>
      <button onClick={selectCat}>Cat</button>
      <button onClick={selectDog}>Dog</button>
    </div>
  );
};
