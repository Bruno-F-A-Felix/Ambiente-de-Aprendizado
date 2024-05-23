Algoritmo "ENQUANTO1A10"

Var
i:inteiro
multi,n:real

Inicio
    i <- 1
    multi <- 0.0
    ENQUANTO i <= 10 FACA
        ESCREVAL("Digite um numero: ")
        Leia(n)
        multi <- multi*n
        i <- i+1
    FIMENQUANTO
    ESCREVAL("Resultado: ", multi)

Fimalgoritmo

Algoritmo "REPITA1A10"

Var
i:inteiro
multi,n:real

Inicio
    i <- 1
    multi <- 0.0
    REPITA
        ESCREVAL("Digite um numero: ")
        Leia(n)
        multi <- multi*n
        i <- i+1
    ATE i>=10
    ESCREVAL("Resultado: ", multi)

Fimalgoritmo
