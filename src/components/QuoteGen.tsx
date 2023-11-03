import { useEffect, useState } from "react";

function QuoteGen() {
  const [currQuote, setCurrQuote] = useState<any>({});
  const [toggle, setToggle] = useState<boolean>(false);

  const api_url = "https://api.quotable.io/random";
  async function getQuote(url: string): Promise<void> {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCurrQuote(data);
  }

  useEffect(() => {
    getQuote(api_url);
  }, [toggle]);

  return (
    <div id="quote-box">
      <h1>Random Quote Generator</h1>
      <p id="text">
        <em>"{currQuote.content}"</em>
      </p>
      <p id="author">-{currQuote.author}</p>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        Twitter
      </a>
      {/* <a id="tweet-quote" href="twitter.com/intent/tweet">Twitter</a> */}
      <button id="new-quote" onClick={() => setToggle(!toggle)}>
        New quote
      </button>
    </div>
  );
}

export default QuoteGen;
