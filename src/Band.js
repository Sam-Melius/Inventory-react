import { Link } from 'react-router-dom';

export default function Band({ band }) {
  return (
    <Link to={`/bands/${band.id}`}>
      <div>
        <h2>{band.name}</h2>
        <p>A {band.genre} band with {band.members} members.</p>
      </div>
    </Link>
  );
}
