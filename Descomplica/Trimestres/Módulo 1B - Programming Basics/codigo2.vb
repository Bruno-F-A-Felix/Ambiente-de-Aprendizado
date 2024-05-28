Algoritmo "MULTDOISNUMEROS"
Procedimento multi(x,y: inteiro)

Var

Inicio
    result <- x*y

Fimprocedimento

Var
    numeros: vetor [1..2] de inteiro
    contador: inteiro
    result: real

Inicio
    PARA contador DE 1 ATE 2 FACA
        ESCREVAL("Digite o ", contador," numero: ")
        Leia(numeros[contador])
    FIMPARA
    multi(numeros[1], numeros[2])
    ESCREVAL("Resultado: ", result)

Fimalgoritmo
