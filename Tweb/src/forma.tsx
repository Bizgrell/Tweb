import React, { useState } from 'react';

const MyForm: React.FC = () => {
  const [input1Value, setInput1Value] = useState<string>('');
  const [input2Value, setInput2Value] = useState<string>('');
  const [input3Value, setInput3Value] = useState<string>('');

  const handleButtonClick = () => {
    console.log(`Input 1: ${input1Value}`);
    console.log(`Input 2: ${input2Value}`);
    console.log(`Input 3: ${input3Value}`);
  };

  return (
    <div>
      <label>
        Input 1:
        <input
          type="text"
          value={input1Value}
          onChange={(e) => setInput1Value(e.target.value)}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          type="text"
          value={input2Value}
          onChange={(e) => setInput2Value(e.target.value)}
        />
      </label>
      <br />
      <label>
        Input 3:
        <input
          type="text"
          value={input3Value}
          onChange={(e) => setInput3Value(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default MyForm;