import './App.css';
import * as React from "react"
import { Admin, ListGuesser, Resource, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { UserList } from './component/user';
import { PostList, PostEdit, PostCreate } from './component/posts';
import Dashboard from './component/Dashboard'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import authProvider from './component/authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={UserList} icon={UserIcon}/>
      
    </Admin>
  );
}

export default App;
