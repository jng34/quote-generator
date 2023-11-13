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
  const randomColor: string =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
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
  const [bgColor, setBGColor] = useState<string>(randomColor);

  const api_url = "https://api.quotable.io/random";

  async function getQuote(url: string): Promise<void> {
    const res = await fetch(url);
    const data = await res.json();
    setCurrQuote(data);
  }

  useEffect(() => {
    getQuote(api_url);
  }, [toggle]);

  const handleNewQuote = () => {
    // change theme color
    const newBGColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBGColor(newBGColor);
    // update quote
    setToggle(!toggle);
  };

  return (
    <div id="main" style={{ backgroundColor: bgColor }}>
      <div id="quote-box">
        <h2>Motivational Quote Generator</h2>
        <p id="text">
          <FontAwesomeIcon icon={faQuoteLeft} style={{ color: bgColor }} />
          <em> {currQuote.content} </em>
          <FontAwesomeIcon icon={faQuoteRight} style={{ color: bgColor }} />
        </p>
        <p id="author">-{currQuote.author}</p>
        <div id="quote-box-2">
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "blue" }} />
          </a>
          <button
            id="new-quote"
            onClick={handleNewQuote}
            style={{ borderColor: bgColor }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteGen;
