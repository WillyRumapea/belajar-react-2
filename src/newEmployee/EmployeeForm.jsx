import { useState } from "react";

export default function EmployeeForm({ addNewEmplo }) {
  const [nameEmployee, setNameEmployee] = useState("");
  const [positionEmployee, setPositionEmployee] = useState("employee");

  function handleNameEmployee(e) {
    setNameEmployee(e.target.value);
  }

  function handlePostionEmployee(e) {
    setPositionEmployee(e.target.value);
  }

  function handleSubmitEmployee(e) {
    e.preventDefault();
    addNewEmplo(nameEmployee, positionEmployee);
    setNameEmployee("");
    setPositionEmployee("");
  }

  return (
    <div>
      <h2>Employee Form</h2>
      <form>
        <input
          type="text"
          value={nameEmployee}
          onChange={handleNameEmployee}
          placeholder="employee name..."
        />
        <select value={positionEmployee} onChange={handlePostionEmployee}>
          <option value="Admin">Admin</option>
          <option value="Cleaning_Service">Cleaning Service</option>
          <option value="Technician">Technician</option>
          <option value="Marketing">Marketing</option>
          <option value="Internship">Internship</option>
          <option value="Leadership">Leadership</option>
        </select>
        <button onClick={handleSubmitEmployee}>submit</button>
      </form>
    </div>
  );
}
