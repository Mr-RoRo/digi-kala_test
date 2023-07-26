import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export const FormEmail = () => {
  const [input, setInput] = useState("test");

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <HStack>
        <Input
          placeholder="ایمیل شما"
          type="email"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">ثبت</Button>
      </HStack>
      {!isError ? (
        <FormHelperText>
          با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};
