import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

const UserWishes = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Input
        value={input}
        onChange={handleChange}
        placeholder='Enter your wishes here...'
        size='large'
      />
    </>
  );
};

export default UserWishes;
