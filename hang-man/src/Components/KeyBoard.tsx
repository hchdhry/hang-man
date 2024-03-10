export function Keyboard() {
    const renderKeys = () => {
        const keys = [];
        for (let i = 97; i <= 122; i++) {
            const key = String.fromCharCode(i);
            keys.push(
                <button
                    key={key}
                    style={{
                        
                        display: "inline-block",
                        padding: "0.5rem",
                        margin: "0.25rem",
                        border: "1px solid gray",
                        borderRadius: "4px",
                        fontFamily: "monospace",
                        fontSize: "1.2rem",
                    }}
                >
                    {key}
                </button>
            );
        }
        return keys;
    };

    return <div>{renderKeys()}</div>;
}