import random
D4=["1" , "2" , "3" , "4"]
roll_again = "yes"
while roll_again == "yes" or roll_again == "y":
    print("Casting the Die")
    print("The values are...")
    value1=random.choice(D4)
    print(value1)
    roll_again = input("Press 'y' or 'yes' to roll the die again.")
    print("May the odds be in your favor...")