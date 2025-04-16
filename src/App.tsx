import './App.scss';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import { section } from './interfaces/SectionInterface';
import sectionData from './Assets/sections.json';
import './i18n/config';

function getSections(): section[] {
    return sectionData as section[];
}
function App() {
  return (
    <div id="App">
      <div id="content">
        <Header sectionProp={getSections()}/>
        <Home/>
      </div>
    </div>
  );
}

export default App;