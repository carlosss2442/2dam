package EJERCICIOS_S1;

import java.io.File;
import java.util.Scanner;

public class ejercicio3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
Scanner teclado = new Scanner(System.in);
		
		System.out.println("Introduce el nombre de la ruta: ");
		String ruta = teclado.nextLine();
		
		
		File fichero = new File(ruta);
		
		System.out.println("nombre del archivo: " + fichero.getName());
		System.out.println("Ruta: " + fichero.getPath());
		System.out.println("Ruta absoluta: " + fichero.getAbsolutePath());
		System.out.println("Se puede leer: " + fichero.canRead());
		System.out.println("Se puede escribir: " + fichero.canWrite());
		System.out.println("Tamaño: " + fichero.length()); 
		System.out.println("Existe el directorio?: " + fichero.exists());
		
	}

}
