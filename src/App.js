/** @format */
import "./App.css";
import ArrowDropDownCircleOutlined from "@material-ui/icons/ArrowDropDownCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
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
                font: "Poppins",
                width: "700px",
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
                width: 150,
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
              <ArrowDropDownCircleOutlined style={{ height: 20 }} />
            </button>
            <div
              style={{
                height: 30,
                width: 250,
                background: "#fff",
                marginLeft: 20,
                borderRadius: 3,
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
                  width: 200,
                  margin: 10,
                  paddingLeft: 10,
                  outline: "none",
                }}
              />
              <SearchOutlinedIcon style={{ paddingRight: 10 }} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
