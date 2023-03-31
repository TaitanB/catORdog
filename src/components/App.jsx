import { Component } from 'react';
import { fetchBreeds, fetchPetByBreed, onFetch } from './api';
import { Dog, Cat } from './Pet';
import { BreedSelect } from './BreedSelect';
import { Loader } from './Loader';
// import { Buttons } from './Buttons';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { IoMdHelp } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

const CatBaseURL = 'https://api.thecatapi.com/v1';
const DogBaseURL = 'https://api.thedogapi.com/v1';
const REACT_APP_CAT_API_KEY =
  'live_cj3Q4r1ebHoU5vIIOpyqdBAsHtM0N7j0agcbkZD4ImH4pmj6mUApCGVeamjUBCCX';
const REACT_APP_DOG_API_KEY =
  'live_QsgJd4PwVkVpjnxs42bHwp3GehROpIRziWAVdO05QFFw4fZo6qX32x2r83jSUdrU';

export class App extends Component {
  state = {
    breeds: [],
    pet: null,
    error: null,
    petType: '',
    isLoading: false,
    random_image: null,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    onFetch()
      .then(hits => {
        // Генеруємо випадковий індекс для масиву
        const random_index = Math.floor(Math.random() * hits.length);
        console.log(random_index);
        // Отримуємо картинку з об'єкту, що відповідає випадковому індексу
        const random_image = hits[random_index];
        console.log(random_image);
        // Отримуємо айді картинки з об'єкту
        const random_id = random_image.id;
        console.log(random_id);
        // Отримуємо URL картинки з об'єкту
        const random_image_url = random_image.largeImageURL;
        console.log(random_image_url);

        this.setState({ random_image: random_image_url });
      })
      .catch(error =>
        this.setState({
          error: 'Sorry, something went wrong...',
        })
      );

    console.log(this.state.random_image);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    console.log(`prevState: ${prevState}`);
    console.log(`this.state: ${this.state}`);
  }

  selectCat = async () => {
    try {
      console.log('selectCat');
      if (null !== this.state.pet) {
        this.setState({ pet: null });
      }

      if (this.state.petType !== 'cat') {
        this.setState({ petType: 'cat', isLoading: true });
        const breeds = await fetchBreeds(CatBaseURL, REACT_APP_CAT_API_KEY);
        this.setState({ breeds: breeds, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error:
          'Мы не смогли загрузить породы питомцев, пожалуйста перезагрузите страницу чтобы попробовать еще раз 🥹',
      });
    }
  };

  selectDog = async () => {
    try {
      console.log('selectDog');

      if (null !== this.state.pet) {
        this.setState({ pet: null });
      }

      if (this.state.petType !== 'dog') {
        this.setState({ petType: 'dog', isLoading: true });
        const breeds = await fetchBreeds(DogBaseURL, REACT_APP_DOG_API_KEY);
        this.setState({ breeds: breeds, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error:
          'Мы не смогли загрузить породы питомцев, пожалуйста перезагрузите страницу чтобы попробовать еще раз 🥹',
      });
    }
  };

  selectBreed = async breedId => {
    console.log(`Вибрали породу: ${breedId}`);
    try {
      if (this.state.petType === 'dog') {
        console.log(`fetchPetByBreed => DOG - ${this.state.petType}`);
        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(
          DogBaseURL,
          REACT_APP_DOG_API_KEY,
          breedId
        );
        console.log(pet);
        this.setState({ pet, isLoading: false });
      }

      if (this.state.petType === 'cat') {
        console.log(`fetchPetByBreed => CAT - ${this.state.petType}`);
        this.setState({ isLoading: true });
        const pet = await fetchPetByBreed(
          CatBaseURL,
          REACT_APP_CAT_API_KEY,
          breedId
        );
        console.log(pet);
        this.setState({ pet, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error:
          'Упс, мы не смогли загрузить питомца 😭. Попробуйте еще раз или перезагрузите страницу 😇',
      });
    }
  };

  render() {
    const { breeds, pet, error } = this.state;

    return (
      <div
        style={{
          backgroundImage: `url(${this.state.random_image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(150, 220, 215, 0.5)',
          // opacity: '0.6',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            gap: '50px',
            justifyContent: 'center',
            padding: '30px 0',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <div
            style={{
              backgroundImage: `url(../png/bxs-cat.png)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#fff',
              width: '100px',
              height: '100%',
            }}
          >
            <a
              href="https://cfa.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on the cat on website of The Cat Fanciers' Association
            </a>
            <IconContext.Provider value={{ color: 'green' }}>
              <div>
                <FaCheck />
              </div>
            </IconContext.Provider>
          </div>
          <button
            style={{
              color: '#e0eee3',
              backgroundColor: '#0b4f17',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              fontSize: '20px',
              fontWeight: '700',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 10px 0 #05300d',
            }}
            onClick={this.selectCat}
          >
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                width="24"
                height="24"
              >
                <path d="M17 14a5 5 0 0 0 2.71-.81L20 13a3.16 3.16 0 0 0 .45-.37l.21-.2a4.48 4.48 0 0 0 .48-.58l.06-.08a4.28 4.28 0 0 0 .41-.76 1.57 1.57 0 0 0 .09-.23 4.21 4.21 0 0 0 .2-.63l.06-.25A5.5 5.5 0 0 0 22 9V2l-3 3h-4l-3-3v7a5 5 0 0 0 5 5zm2-7a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path>
                <path d="M11 22v-5H8v5H5V11.9a3.49 3.49 0 0 1-2.48-1.64A3.59 3.59 0 0 1 2 8.5 3.65 3.65 0 0 1 6 5a1.89 1.89 0 0 0 2-2 1 1 0 0 1 1-1 1 1 0 0 1 1 1 3.89 3.89 0 0 1-4 4C4.19 7 4 8.16 4 8.51S4.18 10 6 10h5.09A6 6 0 0 0 19 14.65V22h-3v-5h-2v5z"></path>
              </svg>
            </p>
            Cat
            <IconContext.Provider
              value={{ color: '#fff', className: 'global-class-name' }}
            >
              <div>
                <IoMdHelp />
              </div>
            </IconContext.Provider>
          </button>
          <button
            style={{
              color: '#e0eee3',
              backgroundColor: '#0b4f17',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              fontSize: '20px',
              fontWeight: '700',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 10px 0 #05300d',
            }}
            onClick={this.selectDog}
          >
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                width="24"
                height="24"
                transform="scale(-1, 1)"
              >
                <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2v6.36a4.38 4.38 0 0 0 1.13 2.72 6.57 6.57 0 0 0 4.13 1.82l3.45-1.38a3 3 0 0 0 1.73-1.84L22 8.15a1.06 1.06 0 0 0 0-.31V7a1 1 0 0 0-1-1zm-5 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
                <path d="M11.38 11.74A5.24 5.24 0 0 1 10.07 9H6a1.88 1.88 0 0 1-2-2 1 1 0 0 0-2 0 4.69 4.69 0 0 0 .48 2A3.58 3.58 0 0 0 4 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 0 1-4.62-2.13z"></path>
              </svg>
            </p>
            Dog
            <IconContext.Provider
              value={{ color: '#fff', className: 'global-class-name' }}
            >
              <div>
                <IoMdHelp />
              </div>
            </IconContext.Provider>
          </button>
          <div
            style={{
              backgroundImage: `url(../png/bxs-dog.png)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#fff',
              width: '100px',
              height: '100%',
            }}
          >
            <FcLike />
            <FcLikePlaceholder />
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(200, 207, 211 , 0.7)',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '30px',
            justifyContent: 'center',
            // width: '480px',
          }}
        >
          {/* <Buttons onClick={(this.selectCat, this.selectDog)} /> */}
          {this.state.petType !== '' && (
            <BreedSelect
              style={{ width: '480px', marginBottom: '50px' }}
              breeds={breeds}
              onSelect={this.selectBreed}
            />
          )}
          {error && <div>{error}</div>}
          {pet && this.state.petType === 'dog' && <Dog pet={pet} />}
          {pet && this.state.petType === 'cat' && <Cat pet={pet} />}
          {this.state.isLoading === true && <Loader />}
        </div>
      </div>
    );
  }
}
