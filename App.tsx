import * as React from 'react';
import './style.css';

function Example() {
  React.useState();
  const abc = () => {};
  React.useEffect(() => {});
  return <div>test</div>;
}

export default function App() {
  const [num, setNum] = React.useState(null);
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    setValue(num % 10 === 0);
  }, [num]);

  const onSubmit = (event) => {
    event.preventDefault();
    setNum(event.target.num.value);
  };

  return (
    <div>
      <div>number : {num}</div>
      <div>{num % 2 === 0 ? 'even' : 'odd'}</div>
      <div>{value && 'useEffect'}</div>
      <form onSubmit={onSubmit}>
        <input type="number" name="num" required />
        <input type="submit" />
      </form>
    </div>
  );
}
