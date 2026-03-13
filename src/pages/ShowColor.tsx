import { SetStateAction, useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";


function ShowHex() {
  const [color, setColor] = useState("CBC2B7");
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setColor(event.target.value);
  }

  return (
    <>
      <div>
        <h1>show me the color!</h1>
        <p>
          Input any hex code to see the color.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="colorBox" style={{ background: `#${color}` }}></div>
          <form style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
            <label style={{ marginRight: '2px', }} htmlFor="hexcode">#</label>
            <input style={{ width: '180px' }} type="text" value={color} id="hexcode" name="hexcode" maxLength={6}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div>
        <ProjectList />
      </div>
    </>
  );
}

export default ShowHex;
