# PRINTING IN TERMINAL 
# print('Hello')

# PRINTING WITH VARIABLES
# a = "hello"
# print(a)

# THIS CHANGES AN INT TO A STR
# a = str(1)
# print(a)

# THIS CHANGES A STR TO AN INT
# b = int('5')
# print(b)

# ADDING INTERVALS TO VARIABLES
# b += 1
# print(b)

# THIS IS AN INT THAT PROVIDES DECIMAL VALUES
# c = float(4)
# print(c)

# VARIABLES INTERACTING WITH EACH OTHER (INTERGERS)
# a = 1
# b = a + 1
# print(b)
# c = b + 3
# print(c)
# d = c -1
# print(d)
# e = d / 2
# print(e)
# f = d ** 2
# print(f)

# THIS IS VARIABLES INTERACTING WITH EACH OTHER (STRINGS)
# a = "This is first string"
# b = "This is second string"
# print(a + ' ' + b) 

# PRINTING LISTS (ARRAYS)
# a = [1, 5, "This is a string", True, 5.6]
# print(a)
# print(a[3])

# a = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]
# # This gets the 2nd array (inside initial array) and gets the 3rd item in array
# print(a[1][2])

# DICTIONARYS (OBJECTS)
# my_car = {
#     'brand': 'Ford',
#     'model': 'Mustang',
#     'year': '1964',
# }

# # This prints entire dictionary (object)
# print(my_car)
# # This prints specifics (e.g. brand)
# print(my_car['brand'])

# b = {
#     'firstGrade': ['Bobby', 'Kyle', 'Suzy'],
#     'secondGrade': ['Jennifer', 'Jasmine', 'Javi'],
#     'thirdGrade': 'Nobody they all failed.'
# }
# print(b)


# IF ELSE STATMENT STRUCTURE
# a = 9
# if a < 10:
#     print('a is less than 10')
# elif a == 10:
#     print('a is 10')
# else:
#     print('a is greater than 10')

# IF ELSE STATMENT WITH STRINGS
# a = 'hello'
# if a == 'hello':
#     print('This works')


# IF ELSE STATEMENTS WITH MULTIPLE CONDITIONS
# a = 1
# b = 5
# if a == 1 and b == 2:
#     print('y')
# else:
#     print('n')

# if a == 0 or b == 5:
#     print('y')
# else:
#     print('n')


# ///////////////////////////////////
#               PART 2
# //////////////////////////////////

# USER INPUT 
# user_input = input('Enter your name')
# print('Hello ' + user_input)

# WHILE LOOP 
# a = 10
# while a < 20:
#     print('The value of a is currently ' + str(a))
#     a += 1
# print('end of loop')

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('Hello, my name is ' + self.name + '. My age is ' + str(self.age))

class SuperHero(Person)

hunter = Person("Hunter", 29)
hunter.greet()
sally = Person('Sally', 45)
sally.greet()