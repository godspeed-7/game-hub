import useGenres from '../hooks/useGenres';

function GenreList() {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((gen) => (
        <li>{gen.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
