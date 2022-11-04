const Counter = ({tabCounter, setTabCounter, Counter}) => {
    return (
        
        <div>
            <div className="counter">
                <button
                className={tabCounter[Counter] === 0 && "hide"}
                onClick={() => {
                const newTab = [...tabCounter];
                newTab[Counter] = newTab[Counter] - 1;
                setTabCounter(newTab);
                }}
                >
                    -
                </button>
                <p>{tabCounter[Counter]}</p>
                <button
                className={tabCounter[Counter] >= 10 && "hide"}
                onClick={() => {
                const newTab = [...tabCounter];
                newTab[Counter] = newTab[Counter] + 1;
                setTabCounter(newTab);
                }}
                >
                    +
                </button>
            </div>
            <div className="reset">
                <button
                    onClick={() => {
                    const newTab = [...tabCounter];
                    newTab[Counter] = 0;
                    setTabCounter(newTab);
                    }}
                >
                    Reset
                </button>
            </div>
        </div>        
      
    )
};

export default Counter;