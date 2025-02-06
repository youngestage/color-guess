function Score({ score }) {
    try {
        return (
            <div 
                data-testid="score"
                data-name="score"
                className="text-2xl text-white text-center my-4"
            >
                Score: {score}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
