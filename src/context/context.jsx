import { createContext, useState } from "react";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function handleFormSubmit(data) {
    if (!data.description || !data.amount) return;
    setTransactions([...transactions, { ...data, id: Date.now() }]);
  }

  return (
    <Context.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        transactions,
        setTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
}
