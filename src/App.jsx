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

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>

      {/* <Search onSearch={handleSearch} search={searchTerm} /> */}
      <InputWithLabel
        id='search'
        label='search'
        value={searchTerm}
        onInputChange={handleSearch}
        isFocused
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' value={search} onChange={onSearch} />
  </>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}, </a>
    </span>
    <span>{item.author}, </span>
    <span>Comments: {item.num_comments}, </span>
    <span>Points: {item.points}</span>
  </li>
);

const InputWithLabel = ({
  id,
  label,
  value,
  type = 'text',
  onInputChange,
  children,
  isFocused,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
      autoFocus={isFocused}
    />
  </>
);

export default App;
