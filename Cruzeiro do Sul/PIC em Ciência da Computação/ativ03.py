# Função que ira converter de decimal para binario
def decimal_to_hexadecimal(decimal):
    # Lista de dígitos hexadecimais validos
    hexDigits = "0123456789ABCDEF"
    
    
    # Realiza as divisões para se obter o valor hexadecimal
    hexadecimalResult = ""
    while decimal > 0:
        remainder = decimal % 16
        hexadecimalResult = hexDigits[remainder] + hexadecimalResult
        decimal //= 16
    
    # Retorna o valor hexadecimal
    return hexadecimalResult

try:
    # Solicita o número decimal ao usuário para conversão
    decimalInput = int(input("Digite um número inteiro na base decimal: "))
    hexadecimalOutput = decimal_to_hexadecimal(decimalInput)
    print(f"O número {decimalInput} em hexadecimal é: {hexadecimalOutput}")
except ValueError:
    print("Entrada inválida. Certifique-se de digitar um número inteiro.")
