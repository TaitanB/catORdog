import Select from 'react-select';

export const BreedSelect = ({ breeds, onSelect }) => {
  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
  }));

  return (
    <Select
      placeholder={'Select the breed of pet'}
      options={options}
      onChange={option => onSelect(option.value)}
    />
  );
};
