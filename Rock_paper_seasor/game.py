import random

# Function to determine the winner
def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        print("It's a draw!")
        return "draw"
    elif user_choice == "rock" and computer_choice == "scissors":
        print("You win! Rock crushes Scissors.")
        return "user"
    elif user_choice == "scissors" and computer_choice == "paper":
        print("You win! Scissors cut Paper.")
        return "user"
    elif user_choice == "paper" and computer_choice == "rock":
        print("You win! Paper covers Rock.")
        return "user"
    else:
        print("Computer wins!")
        return "computer"

# Step 3: Determining the Winner and Keeping Score
user_score = 0
computer_score = 0
draws = 0

while True:
    print("")
    print("*******************************")

    # Step 1: Getting User Input
    user_choice = input("Enter your choice (rock, paper, or scissors), or type 'quit' to exit: ").lower()
    if user_choice == 'quit':
        break

    # Step 2: Generating the Computer's Choice
    options = ["rock", "paper", "scissors"]
    computer_choice = random.choice(options)
    print("Computer chose:", computer_choice)

    # Determine the winner and update scores
    result = determine_winner(user_choice, computer_choice)
    if result == "user":
        user_score += 1
    elif result == "computer":
        computer_score += 1
    else:
        draws += 1

    # Display the score after each round
    print("Score: User =", user_score, "Computer =", computer_score, "Draws =", draws)
    
print("Thank you for playing!")