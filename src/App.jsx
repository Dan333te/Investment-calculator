import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/Input";
import Results from "./components/Results";
function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validDuration = userInputs.duration > 0;
  function handleInputChange(event) {
    setUserInputs((prev) => ({
      ...prev,
      [event.target.id]: Number(event.target.value),
    }));
  }
  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onChange={handleInputChange} />
      {!validDuration && <p className="center">Please enter a valid duration, greater than 0</p> }
      {validDuration && <Results input={userInputs} />}
    </>
  );
}

export default App;
