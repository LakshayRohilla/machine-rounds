import { useState } from "react";

const Acordian = function () {
  const [open1, setOpen1] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [check3, setCheck3] = useState(false);
  return (
    <>
      <div style={{ margin: "0px 170px 0px 170px" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "lightgrey",
            borderRadius: "15px",
          }}
        >
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onClick={() => setCheck1(!check1)}
            style={{ paddingLeft: "100px" }}
          />
          <p style={{}}>
            These are the terms and condition, click me to open1!!
          </p>
          <span
            style={{ alignContent: "center", cursor: "pointer" }}
            onClick={() => {setOpen1(!open1)
                setOpen2(false);
                setOpen3(false);
            }}
          >
            🔽
          </span>
        </div>
        {open1 && (
          <div>
            {check1 && (
              <input type="checkbox" id="horns" name="horns" checked />
            )}
            {!check1 && <input type="checkbox" id="horns" name="horns" />}
            <label for="horns">Item - 1</label>
          </div>
        )}
        {open1 && (
          <div>
            {check1 && (
              <input type="checkbox" id="horns" name="horns" checked />
            )}
            {!check1 && <input type="checkbox" id="horns" name="horns" />}
            <label for="horns">Item - 2</label>
          </div>
        )}
      </div>
      
      <div style={{ margin: "0px 170px 0px 170px" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "lightgrey",
            borderRadius: "15px",
          }}
        >
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onClick={() => setCheck2(!check2)}
            style={{ paddingLeft: "100px" }}
          />
          <p style={{}}>
            These are the terms and condition, click me to open2!!
          </p>
          <span
            style={{ alignContent: "center", cursor: "pointer" }}
            onClick={() => {setOpen2(!open2)
                setOpen1(false);
                setOpen1(false);
            }}
          >
            🔽
          </span>
        </div>
        {open2 && (
          <div>
            {check2 && (
              <input type="checkbox" id="horns" name="horns" checked />
            )}
            {!check2 && <input type="checkbox" id="horns" name="horns" />}
            <label for="horns">Item - 1</label>
          </div>
        )}
        {open2 && (
          <div>
            {check2 && (
              <input type="checkbox" id="horns" name="horns" checked />
            )}
            {!check2 && <input type="checkbox" id="horns" name="horns" />}
            <label for="horns">Item - 2</label>
          </div>
        )}
      </div>
      <div style={{ margin: "0px 170px 0px 170px" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "lightgrey",
            borderRadius: "15px",
          }}
        >
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onClick={() => setCheck3(!check3)}
            style={{ paddingLeft: "100px" }}
          />
          <p style={{}}>
            These are the terms and condition, click me to open3!!
          </p>
          <span
            style={{ alignContent: "center", cursor: "pointer" }}
            onClick={() => {setOpen3(!open3)
                setOpen1(false)
                setOpen2(false)
            }}
          >
            🔽
          </span>
        </div>
        {open3 && (
          <div>
            {check3 && (
              <input type="checkbox" id="horns" name="horns" checked />
            )}
            {!check3 && <input type="checkbox" id="horns" name="horns" />}
            <label for="horns">Item - 1</label>
          </div>
        )}
        {open3 && (
          <div>
            {check3 && (
              <input type="checkbox" id="horns" name="horns" checked />
            )}
            {!check3 && <input type="checkbox" id="horns" name="horns" />}
            <label for="horns">Item - 2</label>
          </div>
        )}
      </div>
      <button disabled={(check1 && check2 && check3) ? false : true }>Submit</button>

    </>
  );
};
export default Acordian;