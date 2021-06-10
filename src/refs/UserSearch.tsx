import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Alex', age: 20 },
  { name: 'John', age: 20 },
  { name: 'Toi', age: 20 },
  { name: 'Oka', age: 20 },
  { name: 'Tiger', age: 20 },
];

const UserSearch: React.FC = () => {
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };

  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name} {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
