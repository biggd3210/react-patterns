
import './App.css';

import NavBar from './NavBar.js';
import Routeways from './Routeways.js';

import whiskey from './images/whiskey.jpg';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';
import tubby from './images/tubby.jpg';

function App({dogs}) {
  return (
    <div className="App">
      <NavBar dogs={dogs} />
      <div className='container'>
        <Routeways dogs={dogs} />
      </div>
    </div>
  );
}

export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

App.defaultProps = { dogs };

export default App;
