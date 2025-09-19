package ejert1;

import java.util.Scanner;

public class ejercicio15 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("Ingresa el radio de una circuferencia: ");
		Scanner teclado = new Scanner(System.in);
		double radio = teclado.nextDouble();
		double diametro = 0;
		double area = 0;
		double volumen = 0;
		
		
		diametro = radio + radio;
		area = Math.PI * Math.pow(radio, 2);
		double redondeo = Math.round(area * 1000.0) / 1000.0;
		volumen = (4.0 / 3.0) *  Math.PI * Math.pow(radio, 3)  ;
		System.out.println("El diametro es: " + diametro);
		System.out.println("El area es: " + redondeo);
		System.out.println("El volumen de la esfera es: " + volumen);

	}

}
