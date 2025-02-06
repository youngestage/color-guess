function App() {
    const [targetColor, setTargetColor] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [message, setMessage] = React.useState('');

    const startNewGame = React.useCallback(() => {
        try {
            const newColor = generateRandomColor();
            const newOptions = generateColorOptions(newColor);
            setTargetColor(newColor);
            setOptions(newOptions);
            setMessage('Guess the correct color!');
            setScore(0); // Reset score when starting new game
        } catch (error) {
            reportError(error);
        }
    }, []);

    React.useEffect(() => {
        try {
            startNewGame();
        } catch (error) {
            reportError(error);
        }
    }, [startNewGame]);

    const handleGuess = (guessedColor) => {
        try {
            if (guessedColor === targetColor) {
                setScore(prevScore => prevScore + 1);
                setMessage('Correct! 🎉');
                setTimeout(() => {
                    const newColor = generateRandomColor();
                    const newOptions = generateColorOptions(newColor);
                    setTargetColor(newColor);
                    setOptions(newOptions);
                    setMessage('Guess the correct color!');
                }, 1500);
            } else {
                setMessage('Wrong guess! Try again 😢');
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="game-container">
            <h1 
                data-testid="gameInstructions"
                data-name="game-title"
                className="text-3xl font-bold text-white text-center mb-8"
            >
                Color Guessing Game
            </h1>
            <ColorBox color={targetColor} />
            <Score score={score} />
            <GameStatus message={message} />
            <ColorOptions options={options} onGuess={handleGuess} />
            <div className="text-center mt-8">
                <button
                    data-testid="newGameButton"
                    data-name="new-game-button"
                    className="new-game-btn px-6 py-3 rounded-lg text-white font-semibold"
                    onClick={startNewGame}
                >
                    New Game
                </button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
