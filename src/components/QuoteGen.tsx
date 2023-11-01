import { useEffect, useState } from "react";
import { Quotes, allQuotes } from "../resources/quotes";

function QuoteGen() {
  const [quotes, setQuotes] = useState<Quotes[]>(allQuotes);
  const [index, setIndex] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }, [toggle]);

  return (
    <div id="quote-box">
      <h1>Random Quote Generator</h1>
      <p id="text">
        <em>"{quotes[index].text}"</em>
      </p>
      <p id="author">-{quotes[index].author}</p>
      <button id="new-quote" onClick={() => setToggle(!toggle)}>
        New quote
      </button>
      <p id="tweet-quote"></p>
    </div>
  );
}

export default QuoteGen;
