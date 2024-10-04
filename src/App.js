import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-left: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ResponseArea = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  min-height: 100px;
`;

const App = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock response for demonstration
    setResponse(`You asked: "${query}"`);
    setQuery('');
  };

  return (
    <AppContainer>
      <Header>AI Query App</Header>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your query here..."
        />
        <Button onClick={handleSubmit}>Send</Button>
      </InputContainer>
      <ResponseArea>
        {response || "AI response will appear here."}
      </ResponseArea>
    </AppContainer>
  );
};

export default App;
