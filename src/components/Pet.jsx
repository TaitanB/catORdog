export const Dog = ({ pet: { url, breeds } }) => {
  const {
    bred_for,
    breed_group,
    height,
    life_span,
    origin,
    name,
    temperament,
    weight,
  } = breeds[0];

  console.log(breeds[0].height);

  return (
    <div
      style={{
        padding: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        alignItems: 'center',
        width: '990px',
        // borderRadius: '30px',
      }}
    >
      <img src={url} width="480" alt="dog" style={{ borderRadius: '30px' }} />
      <div>
        <h2>Breed: {name}</h2>
        <p>
          <b>Breed for:</b> {bred_for ? bred_for : '?'}
        </p>
        <p>
          <b>Breed group:</b> {breed_group ? breed_group : '?'}
        </p>
        <p>
          <b>Life span: </b> {life_span ? life_span : '?'}
        </p>
        <p>
          <b>Temperament:</b> {temperament ? temperament : '?'}
        </p>
        <p>
          <b>Origin:</b> {origin ? origin : '?'}
        </p>
        <p>
          <b>Height:</b> {height.imperial ? height.imperial : '?'} in.,{' '}
          {height.metric ? height.metric : '?'} сm.
        </p>
        <p>
          <b>Weight:</b> {weight.imperial ? weight.imperial : '?'} pound,{' '}
          {weight.metric ? weight.metric : '?'} kg.
        </p>
      </div>
    </div>
  );
};

export const Cat = ({ pet: { url, breeds } }) => {
  const {
    child_friendly,
    description,
    dog_friendly,
    energy_level,
    grooming,
    health_issues,
    hypoallergenic,
    intelligence,
    life_span,
    name,
    origin,
    social_needs,
    stranger_friendly,
    vocalisation,
    temperament,
    weight,
    wikipedia_url,
  } = breeds[0];

  return (
    <div
      style={{
        padding: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        alignItems: 'center',
        width: '990px',
        // borderRadius: '30px',
      }}
    >
      <img src={url} width="480" alt="cat" style={{ borderRadius: '30px' }} />
      <div>
        <h2>Breed: {name}</h2>
        <p>
          <b>Life span: </b> {life_span ? life_span : '?'} years
        </p>
        <p>
          <b>Temperament:</b> {temperament ? temperament : '?'}
        </p>
        <p>
          <b>Weight:</b> {weight.imperial ? weight.imperial : '?'} pound,{' '}
          {weight.metric ? weight.metric : '?'} kg.
        </p>
        <p>
          <b>Origin:</b> {origin ? origin : '?'}
        </p>
        <p>
          <b>Description:</b> {description ? description : '?'}
        </p>

        <div
          style={{
            display: 'flex',
            padding: '30px',
            justifyContent: 'space-around',
          }}
        >
          <ul>
            <li>
              Child friendly: <b>{child_friendly}</b>
            </li>
            <li>
              Dog friendly: <b>{dog_friendly}</b>
            </li>
            <li>
              Stranger friendly: <b>{stranger_friendly}</b>
            </li>
            <li>
              Social needs: <b>{social_needs}</b>
            </li>
            <li>
              Intelligence: <b>{intelligence}</b>
            </li>
          </ul>
          <ul>
            <li>
              Energy level: <b>{energy_level}</b>
            </li>
            <li>
              Grooming: <b>{grooming}</b>
            </li>
            <li>
              Health issues: <b>{health_issues}</b>
            </li>
            <li>
              Hypoallergenic: <b>{hypoallergenic}</b>
            </li>
            <li>
              Vocalisation: <b>{vocalisation}</b>
            </li>
          </ul>
        </div>

        <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">
          Read more on wikipedia
        </a>
      </div>
    </div>
  );
};
