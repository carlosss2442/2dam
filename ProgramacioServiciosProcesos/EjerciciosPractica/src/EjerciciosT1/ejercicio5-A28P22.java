package Ejercicio1;

import java.util.Scanner;

public class ejercicio5 {

	public static void main(String[] args) {
		
			int num1;
			int num2;
		do {
			Scanner teclado = new Scanner(System.in);
			System.out.println("numero 1: ");
			num1 = teclado.nextInt();
			System.out.println("Numero 2: ");
			num2 = teclado.nextInt();
		} while(num1 != num2);
		
		
	}

}
