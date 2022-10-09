import { useEffect, useState, useRef } from "react";
import randomWords from "random-words";
import { Finished } from "./components/Finished";
import { Header } from "./components/Header";
const NUMBER_OF_WORDS = 300;
const TIME = 10;

function App() {
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(TIME);
  const [currentInput, setCurrentInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const textInput = useRef(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  useEffect(() => {
    setWords(generatedWords());
  }, []);

  function generatedWords() {
    return new Array(NUMBER_OF_WORDS).fill(null).map(() => randomWords());
  }

  function startCountDown() {
    if (status === "finished") {
      setCorrect(0);
      setIncorrect(0);
      setStatus("waiting");
      setWords(generatedWords());
      setCurrentWordIndex(0);
      setCurrentCharIndex(-1);
      setCurrentChar("");
    }
    if (status !== "started") {
      setStatus("started");
      let interval = setInterval(() => {
        setCountDown((p) => {
          if (p === 0) {
            clearInterval(interval);
            setStatus("finished");
            setCurrentInput("");

            return TIME;
          } else {
            return p - 1;
          }
        });
      }, 1000);
    }
  }

  function handleKeyDown({ keyCode, key }) {
    if (keyCode === 32) {
      checkMatch();
      setCurrentInput("");
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharIndex(-1);
    } else if (keyCode === 8) {
      setCurrentCharIndex(currentCharIndex - 1);
      setCurrentChar("");
    } else {
      setCurrentCharIndex(currentCharIndex + 1);
      setCurrentChar(key);
    }
  }

  function checkMatch() {
    const wordToMatch = words[currentWordIndex];
    const doesItMatch = wordToMatch === currentInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  function getCharClass(wordIdx, CharIdx, char) {
    if (
      wordIdx === currentWordIndex &&
      CharIdx === currentCharIndex &&
      currentChar &&
      status !== "finished"
    ) {
      if (char === currentChar) {
        return "has-background-success";
      } else {
        return "has-background-danger";
      }
    } else if (
      wordIdx === currentWordIndex &&
      currentCharIndex >= words[currentWordIndex].length
    ) {
      return "has-background-danger";
    } else {
      return "";
    }
  }

  useEffect(() => {
    if (status === "started") {
      textInput.current.focus();
    }
  }, [status]);

  return (
    <div className="App">
      <Header />
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-link">
          <h2>{countDown}</h2>
        </div>
      </div>
      <div className="control is-expanded section">
        <input
          type="text"
          placeholder="Press Start to Start Writing...."
          className="input"
          onKeyDown={handleKeyDown}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          disabled={status !== "started"}
          ref={textInput}
        />
      </div>
      <div className="section">
        <button
          className="is-info button is-fullwidth has-text-weight-bold is-family-primary "
          onClick={startCountDown}
        >
          Start Typing Test
        </button>
      </div>
      {status === "started" && (
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>
                          {char}
                        </span>
                      ))}
                      {"  "}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {status === "finished" && (
        <Finished correct={correct} incorrect={incorrect} />
      )}
    </div>
  );
}

export default App;
