import { useState, useEffect } from "react";
import "./App.css";

const clips = [
  {
    key: "Q",
    id: "Heater-1",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function App() {
  const [display, setDisplay] = useState("");
  //function to play sound
  const playSound = (key) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      const clip = clips.find((c) => c.key === key);
      if (clip) {
        setDisplay(clip.id);
      }
    }
  };

  //useEffect to add event listener for key press
  useEffect(() => {
    //function to handle key press
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (clips.some((c) => c.key === key)) {
        playSound(key);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="drum-machine" className="text-center container mt-5">
      <h1 className="mb-4">🎵 Drum Machine</h1>
      <div className="row">
        <div className="col-md-6 mb-1">
          <div className="row">
            {clips.map((clip) => (
              <div key={clip.key} className="col-4 mb-3">
                <button
                  className="btn btn-primary btn-lg w-100 drum-pad"
                  onClick={() => playSound(clip.key)}
                  id={`pad-${clip.key}`}
                >
                  {clip.key}
                  <audio className="clip" id={clip.key} src={clip.src}></audio>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div id="display" className="border p-4 rounded bg-light w-100">
            <strong>{display}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
