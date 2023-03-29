export const Cat = ({ cat: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <img src={url} width="480" alt="cat" />
      <div>
        <p>Name: {name}</p>
        <p>Bred for: {bred_for}</p>
        <p>Temperament: {temperament}</p>
      </div>
    </div>
  );
};
