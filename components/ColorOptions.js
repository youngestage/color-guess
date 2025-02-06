function ColorOptions({ options, onGuess }) {
    try {
        return (
            <div 
                className="options-container"
                data-name="color-options"
            >
                {options.map((color, index) => (
                    <button
                        key={index}
                        data-testid="colorOption"
                        data-name={`color-option-${index}`}
                        className="color-option"
                        style={{ backgroundColor: color }}
                        onClick={() => onGuess(color)}
                    />
                ))}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
