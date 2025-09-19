package Tema1_practicas;

import java.io.File;
import java.io.IOException;

public class ejemplo1 {

	public static void main(String[] args) {
		
		// Ejemplo 1: informacion de un fichero
		/*File fichero = new File("ejemplo1.txt");
		
		System.out.println("nombre del archivo: " + fichero.getName());
		System.out.println("Ruta: " + fichero.getPath());
		System.out.println("Ruta absoluta: " + fichero.getAbsolutePath());
		System.out.println("Se puede leer: " + fichero.canRead());
		System.out.println("Se puede escribir: " + fichero.canWrite());
		System.out.println("Tamaño: " + fichero.length()); */
		
		// Ejemplo 2: Listar contenido directorio
		/*File directorio = new File(".");
		String[] listarArchivos = directorio.list();
		System.out.println("Contenidos Directorio: " + directorio.getName());
		
		for (int i = 0; i < listarArchivos.length; i++) {
			System.out.println(listarArchivos[i]);
		}
		
		for (String s : listarArchivos) {
			System.out.println(s);
			
		}*/
		
		/*// Ejemplo 3: Listar contenido directorio filtrando por extension
		String strDirectorio2 = args[0];
		System.out.println(strDirectorio2);
		// String extension = ".txt";
		File directorio2 = new File(strDirectorio2);
		FiltroExtension filtro = new FiltroExtension(".txt");
		String[] listarArchivos2 = directorio2.list(filtro);
		for (int i = 0; i < listarArchivos2.length; i++) {
			System.out.println(listarArchivos2[i]);
		}
		*/
		
		
		// Ejemplo 4: crear fichero
		File fichero = new File("prueba.txt");
		try {
			fichero.createNewFile();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			// Es opcional, se va a ejecutar este bien o este mal
		}
		
		
		
		
		
		
	}

}
