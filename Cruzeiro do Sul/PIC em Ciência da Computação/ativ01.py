# Função que retorna o valor total de ES
def calcTime(x, y):
    return x - y

# Solicitando ao usuario o tempo total decorrido
allTime = float(input("Digite o tempo total decorrido(Em segundos): "))

# Solicitando ao usuario o tempo total de processador
processorTime = float(input("Digite o tempo de processador(Em segundos): "))

# Mostra na tela o calculo ES fornecido pelo usuario
print(f"Tempo de entrada e saída fornecido (E/S): {calcTime(allTime, processorTime):.2f} segundos")
