import "./App.css";

function App() {
  return (
    <div id="drum-machine" className="App container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="d-grid gap-3">
            <div className="drum-pad" id="Heater-1">
              Q
              <audio
                className="clip"
                id="Q"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Heater-2">
              W
              <audio
                className="clip"
                id="W"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Heater-3">
              E
              <audio
                className="clip"
                id="E"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Heater-4">
              A
              <audio
                className="clip"
                id="A"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Clap">
              S
              <audio
                className="clip"
                id="S"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Open-HH">
              D
              <audio
                className="clip"
                id="D"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Kick-n'-Hat">
              Z
              <audio
                className="clip"
                id="Z"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Kick">
              X
              <audio
                className="clip"
                id="X"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
              ></audio>
            </div>
            <div className="drum-pad" id="Closed-HH">
              C
              <audio
                className="clip"
                id="C"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
              ></audio>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div id="display" className="border p-3 rounded bg-light">
            Display
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
