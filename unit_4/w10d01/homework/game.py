game_object = {
    'balance': 0,
    'days': 0
}

def day_number():
    game_object['days'] += 1

def teeth():
    game_object['balance'] += 1
    print(f"You now have ${game_object['balance']}")



def rustySheers():
    # print(game_object['balance'])
    game_object['balance'] += 5
    # print(game_object['balance'])
    print(f"You now have ${game_object['balance']}")

def pushmower():
    game_object['balance'] += 50
    print(f"You now have ${game_object['balance']}")

def ridemower():
    game_object['balance'] += 100
    print(f"You now have ${game_object['balance']}")

def team():
    game_object['balance'] += 250
    print(f"You now have ${game_object['balance']}")

while game_object['balance'] < 1000:
    
    # print(f"Day {game_object['days']}")

    if game_object['balance'] < 5:
        print('You are using your teeth to cut grass.. MOOOoooooo...')
        earn1 = input('Type "teeth" to use your teeth and earn $1 ')

        if earn1 == "teeth":
            teeth()

    # elif game_object['balance'] == 5:
    #     print('You have upgraded to Rusty Scissors!')
    #     teeth()

    elif game_object['balance'] < 25:
        # print('Would you like to upgrade to rusty sheers?')
        # upgrade_sheers = input('Type "Y" or "N"')

        print('You will now earn $5 per day!')
        earn5 = input('Type "rusty" to use your rusty Sheers! ')

        if earn5 == "rusty":
            rustySheers()
    # elif game_object['balance'] == 50:
    #     rustySheers()
    #     print('You have upgraded to a push lawnmower!')
    elif game_object['balance'] < 250:
        print('You are now earning $50 a day!')
        earn50 = input('Type "push" to use your push mower!')

        if earn50 == "push":
            pushmower()
    # elif game_object['balance'] == 250:
    #     print('You have upgraded to a riding lawnmower!')
    #     pushmower()

    elif game_object['balance'] < 500:
        print('You are now earning $100 a day')
        earn100 = input('Type "ride" to use your ride mower!')

        if earn100 == "ride":
            ridemower()

    elif game_object['balance'] < 1000:
        print('You now have a team of workers')
        earn250 = input('Type "team" to use your team!')

        if earn250 == "team":
            team()
    else:
        print('CONGRATZ! YOU HAVE WON THE GAME!')
    


    # elif balance >= 5:
    #     print('Would You like to upgrade to "Rusty Sheers?')
    #     upgrade = input('Type "Y" or "N"')

    #     if upgrade == "Y":
    #         print('You are now using Rusty Sheers')
    #         balance += 5
    #         print(f'You now have ${balance}')
    #     else:
    #         balance += 1
    
    # elif 





