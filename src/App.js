/** @format */
import "./App.css";
function App() {
  return (
    <div>
      <header>
        <nav
          style={{
            height: "80px",
            width: "100%",
            background: "#2C387E",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "space-between",
            display: "flex",
          }}>
          <div style={{ flexDirection: "row", display: "flex", flex: 1 }}>
            <img
              src={require("./assets/images/SOClogo.png")}
              style={{ height: "80px", width: "120px" }}
            />
            <h1
              style={{
                color: "#fff",
                paddingLeft: 10,
                fontFamily: "Poppins",
                width: "630px",
                fontSize: 25,

                fontWeight: "inherit",
              }}>
              STUDENTS ONLY CHOICE
            </h1>
          </div>
          <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
            <button
              style={{
                height: 30,
                width: 160,
                background: "#fff",
                marginLeft: 20,
                borderRadius: 3,
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
                display: "flex",
                border: 0,
              }}>
              <p style={{ fontSize: 12, alignSelf: "center", font: "Roboto" }}>
                TOP COURSES
              </p>
              <img
                src={require("./assets/images/arrow.png")}
                style={{ height: 20 }}
              />
            </button>
            <div
              style={{
                height: 30,
                width: 300,
                background: "#fff",
                marginLeft: 20,
                borderRadius: 7,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-between",
              }}>
              <input
                placeholder='Search Collages or Courses'
                style={{
                  height: 20,
                  fontSize: 12,
                  width: 280,
                  margin: 10,
                  paddingLeft: 10,
                  outline: "none",
                }}
              />
              <img
                src={require("./assets/images/search.png")}
                style={{ height: 20, paddingRight: 10 }}
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
