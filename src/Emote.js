import "./App.css";


export default function emote({ emotion, setEmotion, secondary, setSecondary }) {

    return (
        <div>
            <p>Current emotion is {emotion}</p>
            <button onClick={() => setEmotion("sad")}>
                Sad
            </button>
            <button onClick={() => setEmotion("excited")}>
                Excited
            </button>
            <h2>
                Current secondary emotion is {secondary}
            </h2>
            <button onClick={() => setSecondary("grateful")}>Grateful</button>
        </div>
    );
}
