import { PageFlip } from "page-flip";
import { useEffect } from "react";

function Catalog() {
  useEffect(() => {
    const book = document.getElementById("book");

    if (!book) {
      return;
    }

    const pageFlip = new PageFlip(book, {
      width: 300, // required parameter - base page width
      height: 300, // required parameter - base page height

      autoSize: true,
    });

    pageFlip.loadFromImages([
      "/img-ham.PNG",
      "img-jimcat.PNG",
      "img-ncode.PNG",
      "/img-ham.PNG",
      "img-jimcat.PNG",
      "img-ncode.PNG",
      "/img-ham.PNG",
      "img-jimcat.PNG",
      "img-ncode.PNG",
    ]);
  }, []);

  // or if you're using a script tag and page-flip.browser.js:
  return (
    <div id="book">
      <div className="my-page" data-density="hard">
        Page Cover
      </div>
    </div>
  );
}

export default Catalog;
