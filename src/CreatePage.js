import { useState } from 'react';
import { createBand } from './services/fetch-utils';
import { useHistory } from 'react-router';

export default function CreatePage() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [members, setMembers] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await createBand({
      name,
      genre,
      members,
      description
    });
    history.push('/bands');
  }
  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h3>Add a Band</h3>
        <label>
          Name
          <input required onChange={e => setName(e.target.value)} name='name' />
        </label>
        <label>
          Genre
          <select required onChange={e => setGenre(e.target.value)}>
            <option>Rock</option>
            <option>Pop</option>
            <option>Metal</option>
            <option>Punk</option>
            <option>Blues</option>
            <option>Jazz</option>
            <option>Alternative</option>
            <option>Pop Punk</option>
          </select>
        </label>
        <label>
          Members
          <input required onChange={e => setMembers(e.target.value)} name='members' />
        </label>
        <label>
          Description
          <input required onChange={e => setDescription(e.target.value)} name='description' />
        </label>
        <button>Create Band</button>
      </form>
    </div>
  );
}
