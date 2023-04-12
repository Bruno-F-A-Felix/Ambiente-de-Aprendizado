import os

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

numberSelected = 42
maxAttempts = 3
check = False

for turn in range(1, maxAttempts + 1):
    print("======================")
    print("Jogo da Adivinhação")
    print("======================")

    print("Tentativa {} de {}".format(turn, maxAttempts))
    numberTyped = input("Digite o seu numero: ")
    number = int(numberTyped)

    correct = numberSelected == number
    bigger = (number > numberSelected) and (number <= 100)
    lower = number < numberSelected and number > 0

    if(correct):
        check = True
        print("\nParabéns, você acertou\n")
        os.system("pause")
        clear()
        break
    elif(bigger):
        print("\nO numero é um valor menor\n")
        os.system("pause")
        clear()
    elif(lower):
        print("\nO numero é um valor maior\n")
        os.system("pause")
        clear()
    else:
        print("\nVocê digitou um valor inválido, perdeu uma chance.\n")
        os.system("pause")
        clear()

print("======================")
print("Jogo da Adivinhação")
print("======================")

if(not check):
    print("Que pena, você não acertou!")

print("\n\nFIM DO JOGO!!!\n\n")
os.system("pause")


