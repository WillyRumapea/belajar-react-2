import { v4 } from "uuid";

export const initialEmployee = [
  {
    id: 1,
    employeeName: "Agung Sulistio",
    employeePosition: "Cleaning Service",
    present: true,
  },
  {
    id: 2,
    employeeName: "Mila Jessica",
    employeePosition: "Secretary Office",
    present: true,
  },
  {
    id: 3,
    employeeName: "Reza Mirza",
    employeePosition: "Internship Backend",
    present: true,
  },
];

export function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE": {
      const newEmployee = [
        ...state,
        {
          id: v4(),
          employeeName: action.employeeName,
          employeePosition: action.employeePosition,
          present: false,
        },
      ];
      console.log(newEmployee);
      return newEmployee;
    }
    case "DELETE_EMPLOYEE": {
      const deletedEmployee = state.filter(
        (employee) => employee.id !== action.id
      );
      return deletedEmployee;
    }
    case "PRESENT_EMPLOYEE": {
      const presentEmployee = state.map((employee) =>
        employee.id === action.id
          ? { ...employee, present: !employee.present }
          : employee
      );
      return presentEmployee;
    }
  }
}
