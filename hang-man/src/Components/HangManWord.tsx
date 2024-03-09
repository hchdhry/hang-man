

export function HangmanWord() {
    const wordToGuess = "Tesst"
    return (
        <div
            style={{
                display: "flex",
                gap: ".25em",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}
        >
          {wordToGuess.split("").map((letter,index) => (
              <span style={{ borderBottom: ".1em solid black" }}> {letter}</span>
          ))}
        </div>
    )
}