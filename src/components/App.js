import React, { useState } from "react";
import "./../styles/App.css";
import InputFields from "./InputFields";

const App = () => {
  const [inputs, setInputs] = useState([{ name: "", age: "" }]);
  const [data, setData] = useState(null);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const addMore = () => {
    setInputs([...inputs, { name: "", age: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(inputs);
    console.log(inputs);
  };

  const removeField = (index) => {
    const filterData = inputs.filter((_, i) => i !== index);
    setInputs(filterData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputs.map((item, index) => (
          <InputFields
            handleChange={(e) => handleChange(e, index)}
            input={item}
            key={index}
            removeField={()=>removeField(index)}
          />
        ))}

        <button type="button" onClick={addMore}>
          Add More...
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
