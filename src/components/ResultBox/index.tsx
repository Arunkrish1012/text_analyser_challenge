import React, { useState, useEffect } from 'react';
import './index.scss';
import { pronouns } from "../../data/pronouns"

interface ResultBoxProps {
  text: string;
}

interface ResultCounts {
  words: number;
  characters: number;
  sentences: number;
  paragraphs: number;
  pronouns: number;
}

const ResultBox: React.FC<ResultBoxProps> = ({ text }) => {
  const [resultCounts, setResultCounts] = useState<ResultCounts>({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
  });

  useEffect(() => {
    const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

    const characterCount = text.length;

    const sentenceCount = text.split(/[.!?]+/).filter((sentence) => sentence !== '').length;

    const paragraphCount = text.split(/\n\n+/).filter((paragraph) => paragraph !== '').length;

    const pronounRegex = new RegExp(`\\b(${pronouns.join('|')})\\b`, 'gi');
    const matches = text.match(pronounRegex);
    const pronounCount =   matches ? matches.length : 0;
    
    setResultCounts({
      words: wordCount,
      characters: characterCount,
      sentences: sentenceCount,
      paragraphs: paragraphCount,
      pronouns: pronounCount,
    });
  }, [text]);

  return (
    <div className="result-bar">
      {Object.entries(resultCounts).map(([title, value]) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultBox;
