package ejert1;

import java.util.Scanner;

public class ejercicio16 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner teclado = new Scanner(System.in);
		
		System.out.println("Introduce tu fecha de nacimiento: ");
		int fecha = teclado.nextInt();
		double ale = Math.random();
		
		if (fecha < 2000 ) {
			System.out.println("Tu numero de la suerte es el: " + ale);
		} else if (fecha < 1970 ) {
			System.out.println("Tu numero de la suerte es el: " + ale);
		} else {
			System.out.println("Tu numero de la suerte es el: " + ale);
		}
		
		
		
	}

}
