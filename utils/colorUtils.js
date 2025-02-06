function generateRandomColor() {
    try {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } catch (error) {
        reportError(error);
        return '#000000';
    }
}

function generateColorOptions(correctColor) {
    try {
        const options = [correctColor];
        while (options.length < 6) {
            const newColor = generateRandomColor();
            if (!options.includes(newColor)) {
                options.push(newColor);
            }
        }
        return options.sort(() => Math.random() - 0.5);
    } catch (error) {
        reportError(error);
        return Array(6).fill('#000000');
    }
}
