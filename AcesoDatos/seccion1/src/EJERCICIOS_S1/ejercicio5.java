package EJERCICIOS_S1;

import java.io.File;
import java.util.Scanner;

public class ejercicio5 {

	public static void main(String[] args) {
		
		Scanner teclado = new Scanner(System.in);
		
		System.out.println("Introduce el nombre de la ruta: ");
		String ruta = teclado.nextLine();
		System.out.println("Que extension quieres?: ");
		String ex = teclado.nextLine();
		
		File direc = new File(ruta);
		
		// String ruta1 = args[0];
		System.out.println(direc);
		// String extension = ".txt";
		
		File directorio2 = new File(ruta);
		FiltroExtension filtro = new FiltroExtension(ex);
		
		String[] listarArchivos2 = directorio2.list(filtro);
		for (int i = 0; i < listarArchivos2.length; i++) {
			System.out.println(listarArchivos2[i]);
		}
		
		
	}

}
