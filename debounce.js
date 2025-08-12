function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Fake search function
const search = (term) => {
  console.log("Searching for:", term);
  // Simulate fetching or filtering
  setResults([`Result for "${term}"`]);
};

// Debounced version of the search function
const debouncedSearch = debounce(search, 500);

useEffect(() => {
  if (query) {
    debouncedSearch(query);
  }
}, [query]);
