# Função que retorna o valor binario da conversão
def decimal_para_binario(numero_decimal):
    # Verificando se o valor decimal é maior igual a zero
    if numero_decimal == 0: return "0"

    # Fazendo a divisões consecutivas
    numero_binario = ""
    while numero_decimal > 0:
        resto = numero_decimal % 2
        numero_binario = str(resto) + numero_binario
        numero_decimal //= 2

    # Retornando o valor binario
    return numero_binario

# Exemplo de uso:
numero_decimal = int(input("Digite um número decimal maior ou igual a zero: "))
numero_binario = decimal_para_binario(numero_decimal)
print(f"O número {numero_decimal} em binário corresponde a: {numero_binario}")
