import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Quote {
  id: string;
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tag: string[];
}

function QuoteGen() {
  const [currQuote, setCurrQuote] = useState<Quote>({
    id: "",
    author: "",
    authorSlug: "",
    content: "",
    dateAdded: "",
    dateModified: "",
    length: 0,
    tag: [],
  });
  const [toggle, setToggle] = useState<boolean>(false);

  const api_url = "https://api.quotable.io/random";

  async function getQuote(url: string): Promise<void> {
    const res = await fetch(url);
    const data = await res.json();
    setCurrQuote(data);
  }

  useEffect(() => {
    getQuote(api_url);
  }, [toggle]);

  return (
    <div id="quote-box">
      <h1>Random Quote Generator</h1>
      <p id="text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <em>{currQuote.content}</em>
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>
      <p id="author">-{currQuote.author}</p>
      <div id="quote-box-2">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <FontAwesomeIcon icon={faTwitter} style={{ "color": "blue" }} fade/>
        </a>
        <button id="new-quote" onClick={() => setToggle(!toggle)}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default QuoteGen;
