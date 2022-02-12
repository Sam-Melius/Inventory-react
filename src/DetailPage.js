import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { getBandById } from './services/fetch-utils';

export default function DetailPage() {
  const [band, setBand] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const bandData = await getBandById(match.params.id);
      setBand(bandData);
    }
    fetch();
  }, [match.params.id]);

  return (
    <div className='band-info'>
      <h1>{band.name}</h1>
      <h2>A {band.genre} band with {band.members} members.</h2>
      <p>
        {band.description}
      </p>
    </div>
  );
}
