import { produce } from "immer";

const employee = {
  name: "John",
  address: { country: "USA", city: "NY" },
};

const newEmployee = produce(employee, (draft) => {
  draft.address.city = "LA";
});

console.log(employee);
console.log(newEmployee);
