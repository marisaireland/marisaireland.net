import data from "../data.js";

function AboutText() {
  return data.aboutText.split("\n").map((value, index) => {
    return (
      <p key={index}>{value}</p>
    );
  });
}

export default AboutText;
