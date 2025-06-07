import React from "react";

interface AdderProps {
  num1: number;
  num2: number;
}

const Adder: React.FC<AdderProps> = ({ num1, num2 }) => {
  const sum = num1 + num2;

  return (
    <div>
      <p>
        {num1} + {num2} = {sum}
      </p>
    </div>
  );
};

export default Adder;
