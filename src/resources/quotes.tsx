export interface Quotes {
  id: number;
  text: string;
  author: string;
}

export const allQuotes: Quotes[] = [
  {
    id: 0,
    text: "A man is not old until regrets take the place of dreams.",
    author: "John Barrymore",
  },
  {
    id: 1,
    text: "I am not gifted, I am driven.",
    author: "David Goggins",
  },
  {
    id: 2,
    text: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African proverb",
  },
  {
    id: 3,
    text: "Care about people's approval and you will forever be their prisoner.",
    author: "Lao Tzu",
  },
];
