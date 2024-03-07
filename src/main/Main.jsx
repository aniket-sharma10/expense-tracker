import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary/Summary";
import Display from "../display/Display";
import { Context } from "../context/context";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { totalExpense, setTotalExpense, totalIncome, setTotalIncome, transactions } =
    useContext(Context);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        transactions.forEach(item => {
            item.type === 'income' ? income += parseFloat(item.amount) : expense += parseFloat(item.amount)
        });

        setTotalExpense(expense)
        setTotalIncome(income)
    }, [transactions])

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"} mb={'10'}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button bg={"blue.500"} color={"black"} ml={"4"} onClick={onOpen}>
            Add New transaction
          </Button>
        </Flex>
      </Flex>

      <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Display data={transactions.filter((item) => item.type === 'expense')} type={'expense'} />
        <Display data={transactions.filter((item) => item.type === 'income')} type={'income'} />
      </Flex>
    </Flex>
  );
}

export default Main;
