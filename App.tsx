import * as React from 'react';
import './style.css';
import Input from './Input';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  const [text, setText] = React.useState('');
  const [input, setInput] = React.useState('');

  const handleClick = (item) => {
    item % 2 === 0 ? setText('even') : setText('odd');
  };

  const onChange = (v) => {
    console.log(v);
  };

  return (
    <React.Fragment>
      {/* even Or odd
      <div>
        {items.map((item) => {
          return (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>{text}</div> */}
      {/*  */}
      <div>test</div>
      <input />
      <input />
      <Input onValueChange={onChange} />
    </React.Fragment>
  );
}
