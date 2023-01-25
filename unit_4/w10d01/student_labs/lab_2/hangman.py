# THE SECRET WORD THE PLAYER IS TRYING TO GUESS
secretWord = "CBTNuggets"
lettersGuessed = ""

# THE NUMBER OF TURNS BEFORE THE PLAYER LOSES
failureCount = 6

# LOOP UNTIL THE PLAYER HAS MADE TOO MANY FAILED ATTEMPTS
while failureCount > 0:
    # Guess the letter
    guess = input('Enter a letter: ')

    # if letter is in word 
    if guess in secretWord:
        # Player guessed correct letter 
        print(f"Correct! There is one or more {guess} in the secret word.")
    else:
        # player guessed incorrectly and subtracts a "life"
        failureCount -= 1
        print(f"Incorrect. There are no {guess} in the secret word. {failureCount} turn(s) left.")
    
    # Maintain a list of all letters guessed 
    lettersGuessed = lettersGuessed + guess
    wrongLetterCount = 0

    for letter in secretWord:
        if letter in lettersGuessed:
            print(f"{letter}", end="")
        else:
            print("_", end="")
            wrongLetterCount += 1
    print("")
    
    # If there were no wrong letters, then the player won!
    if wrongLetterCount == 0:
        print(f"Congratz! The secret word was: {secretWord}. You won!")
        break

else:
    print('Uh oh! You are now dead!')