# Função que retorna o valor binario da conversão
def decimal_to_binario(decimal):
    # Verificando se o valor decimal é maior igual a zero
    if decimal == 0: return "0"

    # Fazendo a divisões consecutivas
    binario = ""
    while decimal > 0:
        resto = decimal % 2
        binario = str(resto) + binario
        decimal //= 2

    # Retornando o valor binario
    return binario

# Exemplo de uso:
decimal = int(input("Digite um número decimal maior ou igual a zero: "))
binario = decimal_to_binario(decimal)
print(f"O número {decimal} em binário corresponde a: {binario}")
