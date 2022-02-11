import { useState, useEffect } from 'react';
import { getBands } from './services/fetch-utils';
import Band from './Band';

export default function ListPage() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    async function fetch() {
      const fecthBands = await getBands();
      setBands(fecthBands);
    }
    fetch();
  }, []);

  return (
    <div className='list'>List Of Bands:
      {
        bands.map(band => <Band key={band.id} band={band} />)
      }
    </div>
  );
}
