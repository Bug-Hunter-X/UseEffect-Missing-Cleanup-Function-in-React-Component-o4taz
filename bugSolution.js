```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController(); // Add AbortController
    const signal = controller.signal;
    fetch('https://api.example.com/data', {signal}) // Pass signal to fetch
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!signal.aborted) {
          setCount(data.count);
        }
      })
      .catch(error => {
        if (!signal.aborted) {
          console.error('Error fetching data:', error);
        }
      });
    
    return () => controller.abort(); // Cleanup function to abort fetch
  }, []);

  return <div>Count: {count}</div>;
}
```