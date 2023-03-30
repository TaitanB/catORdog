import Select from 'react-select';
import { Component } from 'react';

export class BreedSelect extends Component {
  componentDidMount() {
    console.log('BreedSelect componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('BreedSelect componentDidUpdate');
    console.log('BreedSelect prevProps:');
    console.log(prevProps);
  }

  render() {
    return (
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? '#cbf3cb' : ' #f3cbcb',
            color: '#de1f1f',
          }),
        }}
        // clasName={select}
        value={''}
        placeholder={'Select the breed of pet'}
        options={this.props.breeds.map(breed => {
          // console.log(breed.id);
          // console.log(breed.name);
          return {
            value: breed.id,
            label: breed.name,
          };
        })}
        onChange={option => this.props.onSelect(option.value)}
      />
    );
  }
}

// export const BreedSelect = ({ breeds, onSelect }) => {
//   const options = breeds.map(breed => ({
//     value: breed.id,
//     label: breed.name,
//   }));

//   return (
//     <Select
//       placeholder={'Select the breed of pet'}
//       options={options}
//       onChange={option => onSelect(option.value)}
//     />
//   );
// };
