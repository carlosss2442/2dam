package EJERCICIOS_S1;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class ejercicio4 {

	public static void main(String[] args)  {
		// TODO Auto-generated method stub
		
		Scanner teclado = new Scanner(System.in);
		
		System.out.println("Introduce el nombre de la ruta: ");
		String ruta = teclado.nextLine();
		
		File direc = new File(ruta);
		
		if (direc.exists()) {
			System.out.println("Si existe el archivo");
		} else {
			System.err.println("No existe");
		}
		teclado.close();
		
		
		
	}

}
