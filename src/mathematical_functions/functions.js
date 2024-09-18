export function CalciFunctions() {
  const handleClick = (number, setDisplay) => {
    if (number !== "R") {
      setDisplay((prev) => prev + number);
    } else {
      setDisplay("");
    }
  };

  const handleOperator = (op, setOp, setDisplay) => {
    setOp(op);
    setDisplay((prev) => prev + " " + op + " ");
  };

  const handleMain = (display, setDisplay) => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleClick,
    handleOperator,
    handleMain,
  };
}
