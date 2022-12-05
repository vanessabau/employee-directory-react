import React from "react";

// Style Jumbo
const styles = {
  jumbo: {
    margin: "0",
    marginBottom: "20px",
    backgroundColor: "#0D4F8B",
    color: "white",
  },
  heading: {
    fontFamily: "impact",
    fontSize: "4em",
  },
  lead: {
    letterSpacing: ".12em",
    //fontFamily: "Fedra Sans",
  },
};

const Jumbo = () => {
  return (
    <div className="jumbo">
      <div style={styles.jumbo} className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 style={styles.heading} className="display-4">
            DUNDER MIFFLIN
          </h1>
          <p style={styles.lead} className="lead">
            Paper Company <i className="fa fa-users" aria-hidden="true"></i>{" "}
            Employee Directory
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
