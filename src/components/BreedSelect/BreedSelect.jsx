import Select from 'react-select';
import React from 'react';

export const BreedSelect = ({ breeds, onSelect }) => {
  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
  }));

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused
            ? 'rgba(121, 188, 198, 0.75)'
            : ' rgba(217, 217, 217, 0.2)',
          borderRadius: '20px',
          width: '1050px',
          padding: ' 0 30px',
        }),
        menu: baseStyles => ({
          ...baseStyles,
          backgroundColor: 'rgba(121, 188, 198, 0.8)',
          fontWeight: '700',
          fontSize: '20px',
          borderRadius: '20px',
          padding: '10px 30px',
        }),
      }}
      classNamePrefix="react-select"
      // value={''}
      placeholder={'Select the breed of pet'}
      options={options}
      onChange={option => onSelect(option.value)}
    />
  );
};

// export class BreedSelect extends Component {
//   // componentDidMount() {
//   //   console.log('BreedSelect componentDidMount');
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log('BreedSelect componentDidUpdate');
//   //   console.log('BreedSelect prevProps:');
//   //   console.log(prevProps);
//   // }

//   render() {
//     return (
//       <Select
//         styles={{
//           control: (baseStyles, state) => ({
//             ...baseStyles,
//             backgroundColor: state.isFocused ? '#cbf3cb75' : ' #f3cbcb75',
//             borderRadius: '20px',
//             width: '1050px',
//             padding: ' 0 30px',
//           }),
//           placeholder: (baseStyles, state) => ({
//             ...baseStyles,
//             color: state.isFocused ? '#05300d' : ' #640909',
//           }),
//           menu: baseStyles => ({
//             ...baseStyles,
//             backgroundColor: 'rgba(203, 243, 203, 0.6)',
//             borderRadius: '20px',
//             padding: '10px 30px',
//             color: '#05300d',
//           }),
//         }}
//         classNamePrefix="react-select"
//         // value={''}
//         placeholder={'Select the breed of pet'}
//         options={this.props.breeds.map(breed => {
//           // console.log(breed.id);
//           // console.log(breed.name);
//           return {
//             value: breed.id,
//             label: breed.name,
//           };
//         })}
//         onChange={option => this.props.onSelect(option.value)}
//       />
//     );
//   }
// }
