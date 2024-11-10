import "./styles.css";
import { useState, useEffect, useRef } from "react";

const soundArr = {
  Q: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  W: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  E: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  A: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  S: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  D: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  Z: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  X: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  C: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
};

const soundName = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick n' Hat",
  X: "Kick",
  C: "Closed HH",
};

export default function App() {
  const [display, setDisplay] = useState("");
  const soundRef = useRef({});
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (soundArr[key]) {
      playSound(key);
    }
  };
  const playSound = (key) => {
    const audio = soundRef.current[key];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(soundName[key]);
    }
  };

  return (
    <div className="App" id="drum-machine">
      <div id="display">{display}</div>
      <div id="buttonSet1">
        <button
          className="drum-pad"
          id={soundName.Q}
          onClick={() => playSound("Q")}
        >
          <audio
            id="Q"
            className="clip"
            ref={(q) => (soundRef.current["Q"] = q)}
            src={soundArr.Q}
          ></audio>
          Q
        </button>
        <button
          className="drum-pad"
          id={soundName.W}
          onClick={() => playSound("W")}
        >
          <audio
            id="W"
            className="clip"
            ref={(w) => (soundRef.current["W"] = w)}
            src={soundArr.W}
          ></audio>
          W
        </button>
        <button
          className="drum-pad"
          id={soundName.E}
          onClick={() => playSound("E")}
        >
          <audio
            id="E"
            className="clip"
            ref={(e) => (soundRef.current["E"] = e)}
            src={soundArr.E}
          ></audio>
          E
        </button>
      </div>
      <div id="buttonSet2">
        <button
          className="drum-pad"
          id={soundName.A}
          onClick={() => playSound("A")}
        >
          <audio
            id="A"
            className="clip"
            ref={(a) => (soundRef.current["A"] = a)}
            src={soundArr.A}
          ></audio>
          A
        </button>
        <button
          className="drum-pad"
          id={soundName.S}
          onClick={() => playSound("S")}
        >
          <audio
            id="S"
            className="clip"
            ref={(s) => (soundRef.current["S"] = s)}
            src={soundArr.S}
          ></audio>
          S
        </button>
        <button
          className="drum-pad"
          id={soundName.D}
          onClick={() => playSound("D")}
        >
          <audio
            id="D"
            className="clip"
            ref={(d) => (soundRef.current["D"] = d)}
            src={soundArr.D}
          ></audio>
          D
        </button>
      </div>
      <div id="buttonSet3">
        <button
          className="drum-pad"
          id={soundName.Z}
          onClick={() => playSound("Z")}
        >
          <audio
            id="Z"
            className="clip"
            ref={(z) => (soundRef.current["Z"] = z)}
            src={soundArr.Z}
          ></audio>
          Z
        </button>
        <button
          className="drum-pad"
          id={soundName.X}
          onClick={() => playSound("X")}
        >
          <audio
            id="X"
            className="clip"
            ref={(x) => (soundRef.current["X"] = x)}
            src={soundArr.X}
          ></audio>
          X
        </button>
        <button
          className="drum-pad"
          id={soundName.C}
          onClick={() => playSound("C")}
        >
          <audio
            id="C"
            className="clip"
            ref={(c) => (soundRef.current["C"] = c)}
            src={soundArr.C}
          ></audio>
          C
        </button>
      </div>
    </div>
  );
}
