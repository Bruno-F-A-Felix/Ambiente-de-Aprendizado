# Solicita o valor do clock externo e o valor do multiplicador
clockExternoMhz = float(input("Digite o valor do clock externo em MHz: "))
mult = float(input("Digite o valor do multiplicador: "))

# Calcula a velocidade do clock interno em GHz
clockInternoGhz = (clockExternoMhz * mult) / 1000

# Mostra o resultado do calculo
print(f"A velocidade do clock interno é de {clockInternoGhz:.2f} GHz.")
