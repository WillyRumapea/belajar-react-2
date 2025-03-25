export default function EmployeeList({ employess, statEmployee, delEmploye }) {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employess.map((employee) => {
          return (
            <li key={employee.id}>
              <div>
                <p>{employee.employeeName}</p>
                <p>{employee.employeePosition}</p>
                <input
                  type="checkbox"
                  onChange={() => statEmployee(employee.id)}
                  value={employee.present}
                />
              </div>
              <button onClick={() => delEmploye(employee.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
