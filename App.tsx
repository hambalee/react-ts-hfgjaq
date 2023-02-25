import * as React from 'react';
import './style.css';

function Example() {
  React.useState();
  const abc = () => {};
  React.useEffect(() => {});
  return <div>test</div>;
}

export default function App() {
  const [count, seCount] = React.useState(0);
  const [name, setName] = React.useState('');

  const onClick = (event) => {
    // seCount((count) => count + 1);
    seCount((count) => count + 1);
    setName('hello');
  };

  console.log('rendered');

  return (
    <div>
      <div>
        {count} {name}
      </div>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
