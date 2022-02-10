import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
    
  return response.user;
}
  
export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });
  
  return response.user;
}
  
export async function logout() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}

export async function getBands() {
  const response = await client
    .from('bands')
    .select();

  return checkError(response);
}

export async function getBandById(id) {
  const response = await client
    .from('bands')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}

export async function createBand(band) {
  const response = await client
    .from('bands')
    .insert([band]);

  return checkError(response);
}