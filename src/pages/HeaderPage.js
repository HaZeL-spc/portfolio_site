import React, { useState, useEffect, useRef } from 'react';

const HeaderPage = () => {

    const words = ['ready to write code for you', 'looking forward to work with you', 'ready to operate with your team']
    const [ numberLetter, setNumberLetter ] = useState(0)
    const [ numberWord, setNumberWord ] = useState(0)
    const [ word, setWord ] = useState(words[0])
    const lineRef = useRef()

    useEffect(() => {

        var interval = setTimeout(() => {
            try {
                if (numberLetter <= words[numberWord].length){
                    lineRef.current.className = 'line'
                    setWord(words[numberWord].slice(0,numberLetter))
                    setNumberLetter(numberLetter + 1)
                } else {
                    lineRef.current.className = 'opacity-line'
                    setTimeout(() => {
                        setNumberWord(numberWord + 1)
                        setNumberLetter(0)
                    }, 1000)
                }
            } catch {
                setNumberWord(0)
                setNumberLetter(0)
            }
        }, 150)
       
        return () => clearInterval(interval)
    }, [numberLetter, numberWord])


    return (
      <div className="header-page header-bg">
        <div className="header-words">
            <h2 className="i-am-header-text">I am</h2>
            <div className="fillings-text">
                <span className="underline-word">{word}</span>
                <span ref={lineRef}>|</span>
            </div>
        </div>
      </div>
    );
};

export default HeaderPage;