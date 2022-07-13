import "./App.css";


export default function emote({ emotion, setEmotion }) {
    return (
        <div>
            <p>Current emotion is {emotion}</p>
            <button onClick={() => setEmotion("sad")}>
                Sad
            </button>
            <button onClick={() => setEmotion("excited")}>
                Excited
            </button>
        </div>
    );
}
