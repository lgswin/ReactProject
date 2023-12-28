import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomColor(type) {
    if (type === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
    } else if (type === "rgb") {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);

      setColor(`RGB(${r},${g},${b})`);
    }
  }

  useEffect(() => {
    handleCreateRandomColor(typeOfColor);
  }, [typeOfColor]); // typeOfColor가 바뀔때 한번 실행해줌, 만약 [typeOfColor]가 없으면 render할때마다 실행, 딱 한번만 할려면 [] 빈 값으로 세팅!

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <form>
        Select a color type
        <br />
        <label>
          <input
            type="radio"
            value="hex"
            checked={typeOfColor === "hex"}
            onChange={() => setTypeOfColor("hex")}
          />
          HEX
        </label>
        <label>
          <input
            type="radio"
            value="rgb"
            checked={typeOfColor === "rgb"}
            onChange={() => setTypeOfColor("rgb")}
          />
          RGB
        </label>
      </form>
      <button
        style={{
          marginTop: "10px",
        }}
        onClick={() => handleCreateRandomColor(typeOfColor)}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX" : "RGB"} Color</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
