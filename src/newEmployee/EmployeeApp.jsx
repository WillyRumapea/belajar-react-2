import { useReducer } from "react";
import { employeeReducer, initialEmployee } from "./reducer";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

export default function EmployeeApp() {
  const [employess, dispatch] = useReducer(employeeReducer, initialEmployee);

  function handleAddEmployee(name, position) {
    dispatch({
      type: "ADD_EMPLOYEE",
      employeeName: name,
      employeePosition: position,
    });
  }

  function handleDelEmployee(id) {
    dispatch({
      type: "DELETE_EMPLOYEE",
      id,
    });
  }

  function handlePresEmployee(id) {
    dispatch({
      type: "PRESENT_EMPLOYEE",
      id,
    });
  }

  return (
    <div>
      <h1>Employee App</h1>
      <EmployeeForm addNewEmplo={handleAddEmployee} />
      <EmployeeList
        employess={employess}
        delEmploye={handleDelEmployee}
        statEmployee={handlePresEmployee}
      />
    </div>
  );
}
