import * as React from 'react';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clarke',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      {/* <List list={stories} /> */}
      <List list={searchedStories} />
    </div>
  );
};

// const Search = (props) => {
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     props.onSearch(event);
//     // synthetic event
//     // console.log(event);
//     // value of target
//     // console.log(event.target.value);
//   };
//   return (
//     <div>
//       <label htmlFor='search'>Search: </label>
//       <input id='search' type='text' onChange={handleChange} />
//       <p>
//         Searching for : <strong>{searchTerm}</strong>
//       </p>
//     </div>
//   );
// };

const Search = (props) => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' onChange={props.onSearch} />
  </div>
);

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}, </a>
    </span>
    <span>{props.item.author}, </span>
    <span>Comments: {props.item.num_comments}, </span>
    <span>Points: {props.item.points}</span>
  </li>
);

export default App;
