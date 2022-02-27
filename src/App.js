import './App.css';
import * as React from "react"
import { Admin, ListGuesser, Resource, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './component/user';
import { PostList, PostEdit, PostCreate } from './component/posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={EditGuesser} />
      <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate}/>
    </Admin>
  );
}

export default App;
