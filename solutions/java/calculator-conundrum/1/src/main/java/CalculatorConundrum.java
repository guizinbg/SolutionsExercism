class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation) {
        if (operation == null)
        {
            throw new IllegalArgumentException ("Operation cannot be null");
        }

        if (operand2 == 0 && operation == "/")
        {
            try {
                int x = operand1 / operand2;   
            }
            catch (ArithmeticException e)
                {
                    throw new IllegalOperationException("Division by zero is not allowed", e);


                }
        }
        switch(operation)
            {
                case "+":
                    return "" + operand1 + " + " + operand2 + " = " + (operand1 + operand2);

                case "*":
                    return "" + operand1 + " * " + operand2 + " = " + (operand1 * operand2);

                case "/":
                    return "" + operand1 + " / " + operand2 + " = " + (operand1 / operand2);

                case "":
                    throw new IllegalArgumentException ("Operation cannot be empty");

                default:
                    throw new IllegalOperationException("Operation '" + operation + "' does not exist");


            }
        
    
        
    }
}
