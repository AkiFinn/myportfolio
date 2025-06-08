import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, speed = 200, delay = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = currentWordIndex % words.length;
    const fullText = words[current];

    let typeSpeed = speed;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = delay;
    } else if (isDeleting && currentText === '') {
      typeSpeed = 600;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== fullText) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => prev + 1);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, speed, delay]);

  return (
    <h2>
      {currentText}
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypingEffect;