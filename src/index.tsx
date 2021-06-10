import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
