import * as React from 'react';

const Input = (props) => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          props.onValueChange(<Input />);
        }}
      />
    </div>
  );
};

export default Input;
