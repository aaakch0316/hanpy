import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

type InputSearchProps = {
  // handleClick: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
};

const InputSearch = ({ setEmail }: InputSearchProps) => {
  const handleClick = () => {
    setEmail("iojeojf");
  };
  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="text" placeholder="Enter email" />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputSearch;

/**
 * input 넣을 때, setData 최적화 하는 방법은?
 */
