import sys
import json
operator = float(sys.argv[1])
number1 = float(sys.argv[2])
number2 = float(sys.argv[3])


if operator == 1:
    print(number1 + number2)
elif operator == 2:
    print(number1 - number2)
elif operator == 3:
    print(number1 * number2)
elif operator ==4:
    print(number1 / number2)

