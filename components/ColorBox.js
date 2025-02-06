function ColorBox({ color }) {
    try {
        return (
            <div 
                data-testid="colorBox"
                data-name="color-box"
                className="color-box fade-in"
                style={{ backgroundColor: color }}
            />
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
