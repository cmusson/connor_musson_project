import { IQuote } from "@/typings";
import Quote from "./Quote";

interface IQuoteListProps {
  quotes: IQuote[];
  page: "movie" | "character";
}

const QuoteList = ({ quotes, page }: IQuoteListProps) => {
  return (
    <section
      className={`${
        page === "movie" ? "h-80" : "h-96"
      } overflow-y-auto flex flex-col align-center gap-2 bg-info-gry p-2 rounded-lg mt-2`}
    >
      {quotes.map((quote: any, i) => (
        <Quote
          key={`${quote._id}-${i}`}
          quote={quote}
          character={page === "character" ? true : false}
        />
      ))}
    </section>
  );
};

export default QuoteList;
