import { useEffect, useState } from 'react';
import './autoCompleteSearchBar.css';

const AutoCompleteSearchBar = () => {
    const [input, setInput] = useState(); // to take user input
    const [result, setResult] = useState([]); // for the search output
    const [showResults, setShowResult ] = useState(false)// to hide & display the search result list
    const [cache, setCache ] = useState({}); // for caching

    const fetchData = async() => {
        if(cache[input]){
            console.log(`CACHE RETURNED ${input}`);
            setResult(cache[input]);
            return; // so that program does go further in this function.
        }

        console.log(`API CALLED ${input}`);
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const json = await data.json();
        setResult(json?.recipes);
        setCache((prev) => ({ ...prev, [input]: json?.recipes }))
    }

    // We want to fetch the data whenever input changes.
    useEffect(() => {
        // Timer to implement debouncing.
        const timer = setTimeout(fetchData, 400);

        return () => {
            clearTimeout(timer);
        }
    }, [input]);


    return (
      <>
        <h1>Auto Complete Search Bar</h1>
        <div style={{ marginBottom: 80 }}>
          <input
            type="text"
            className="search-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
          />
          {/* Now to show the result we get according to the input */}
          {showResults && (
            <div className="results-container">
              {result.map((r) => (
                <span key={r?.id} className="result">
                  {r?.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </>
    );
}

export default AutoCompleteSearchBar;