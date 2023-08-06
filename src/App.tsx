import { useState } from "react";
import { ExpenseList } from "./expensetracker/components/ExpenseList";
import ExpenseFilter from "./expensetracker/components/ExpenseFilter";
import ExpenseForm from "./expensetracker/components/ExpenseForm";
import categories from "./expensetracker/categories";

function App() {
  const [selectedcategory, setselectedcategory] = useState("");

  const [expenses, setexpenses] = useState([
    { id: 1, description: "bc", amount: 100, category: "Utilities" },
    { id: 2, description: "zyx", amount: 100, category: "Entertainment" },
  ]);
  const visibleExpenses = selectedcategory
    ? expenses.filter((e) => e.category === selectedcategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setexpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setselectedcategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setexpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
