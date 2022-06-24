import { gql, useQuery } from '@apollo/client';
import { Header } from './components/Header';
import { Lesson } from './components/Lesson';
import { SideBar } from './components/SideBar';
import { Video } from './components/Video';
import { Event } from './pages/Event';

function App() {

  return (
    <Event />
  );
};

export default App
