import React, { useContext } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Context } from "../context/context";

function AddTransaction({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(Context);

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter description</FormLabel>
              <Input
                placeholder="Enter transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl mt={"15px"}>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              {" "}
              <Radio
                value="income"
                colorScheme="blue"
                name="type"
                checked={formData.type === "income"}
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                ml={"10px"}
                value="expense"
                colorScheme="red"
                name="type"
                checked={formData.type === "expense"}
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default AddTransaction;
