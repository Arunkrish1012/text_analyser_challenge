import React, { useState } from 'react';
import './index.scss'


interface TextAreaProps {
  onTextChange: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onTextChange }) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText); 
  };

  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={text}
      onChange={handleChange}
    />
  );
};
     
export default TextArea
