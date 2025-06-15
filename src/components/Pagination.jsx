const getPages = (cur, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (cur <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (cur >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", cur - 1, cur, cur + 1, "...", total);
    }
  }
  return pages;
};

const Pagination = ({ selectPageHandler, page, dynamicPage }) => {
  return (
    <div className="mt-10 space-x-0 md:space-x-6 flex items-center justify-center">
      <button
        disabled={page === 1}
        className={`px-1.5 py-1 rounded-md ${
          page === 1
            ? "bg-gray-300 cursor-not-allowed opacity-60"
            : "bg-gray-700 cursor-pointer"
        } text-white`}
        onClick={() => selectPageHandler(page - 1)}
      >
        Prev
      </button>
      {getPages(page, dynamicPage)?.map((item, idx) => {
        if (item === "...") {
          return (
            <span key={idx} className="px-2 cursor-default select-none">
              ...
            </span>
          );
        }
        return (
          <span
            key={idx}
            onClick={() => selectPageHandler(item)}
            className={`cursor-pointer px-3 py-1 rounded-md ${
              item === page
                ? "bg-gray-300 font-bold text-black"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {item}
          </span>
        );
      })}
      <button
        disabled={page === dynamicPage}
        className={`px-3 py-1 rounded-md ${
          page === dynamicPage
            ? "bg-gray-300 cursor-not-allowed opacity-60"
            : "bg-gray-700 cursor-pointer"
        } text-white`}
        onClick={() => selectPageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
