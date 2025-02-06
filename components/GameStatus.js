function GameStatus({ message }) {
    try {
        return (
            <div 
                data-testid="gameStatus"
                data-name="game-status"
                className="text-xl text-white text-center my-4 fade-in"
            >
                {message}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
