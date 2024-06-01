//Para o desenvolvimento desse código é preciso ter:
// - variaveis: int, double e String
// - recebe 2 numeros inteiros usando o swing
// - Calcula o quociente da divisão dos 2 numeros
// - A potência do primeiro numero pelo segundo numero
// - Monstra todas essas informações usando o swing

import javax.swing.*;

public class atividade {
    public static void main(String args[]) {
        //Declaração de variaveis
        int n1, n2;
        double quociente, potencia;
        String msg = "";

        //Entrada de dados
        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero Inteiro"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro numero Inteiro"));
        
        //Processamento
        quociente = (double) n1 / n2;
        potencia = Math.pow(n1, n2);

        //Saída de dados
		msg = msg + "O quociente da divisao de " + n1 + " por " + n2 + " = " + quociente + "\n";
        msg = msg + "A potencia de " + n1 + " por " + n2 + " = " + potencia + "\n";
        JOptionPane.showMessageDialog(null, msg);

        System.exit(0);
    }
}
