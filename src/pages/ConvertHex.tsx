import { SetStateAction, useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";


function ConvertHex() {
  const [color, setColor] = useState("CBC2B7");
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setColor(event.target.value);
  };

  function h2rgb(e: string) {
    let r = e.slice(0, 2);
    let g = e.slice(2, 4);
    let b = e.slice(4);
    return "rgb(" + parseInt(r, 16) + "," + parseInt(g, 16) + "," + parseInt(b, 16) + ")";

  }
  const rgb = h2rgb(color);


  return (
    <>
      <div>
        <h1>who the hex rgb?</h1>
        <p>
          Convert hexidecimal to rgb:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="colorBox" style={{ background: `#${color}` }}></div>
          <form style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
            <label style={{ marginRight: '2px', }} htmlFor="hexcode">#</label>
            <input style={{ width: '180px', }} type="text" value={color} id="hexcode" name="hexcode" maxLength={6}
              onChange={handleChange}
            />
          </form>
          <p>You be {rgb}</p>
        </div>
      </div>
      <div>
        <ProjectList />
      </div>
    </>
  );
}

export default ConvertHex;
