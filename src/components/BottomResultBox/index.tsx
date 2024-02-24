import React, { useMemo } from 'react';
import './index.scss';

interface BottomResultBoxProps {
  text: string;
}

const BottomResultBox: React.FC<BottomResultBoxProps> = ({ text }) => {
  const { averageReadingTime, longestWord } = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(Boolean); 
    const wordCount = words.length;
    const averageWordsPerMinute = 200; 
    const averageReadingTimeInSeconds = (wordCount / averageWordsPerMinute) * 60;
    const minutes = Math.floor(averageReadingTimeInSeconds / 60);
    const seconds = Math.round(averageReadingTimeInSeconds % 60);
    const averageReadingTime = `${minutes} minutes ${seconds} seconds`;

    const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');

    return { averageReadingTime, longestWord };
  }, [text]);

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: averageReadingTime,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ];

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomResultBox;
