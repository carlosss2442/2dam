package ejert1;

import java.util.Scanner;

public class ejercicio17 {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introdueix una contrasenya: ");
        String password = teclado.nextLine();

        // Variables de control
        boolean tieneNumero = false;
        boolean tieneMayuscula = false;
        

       
        if (password.length() < 5) {
            System.out.println(" La contrasenya ha de tenir almenys 5 caràcters.");
            return;
        }

        
        for (int i = 0; i < password.length(); i++) {
           char c = password.charAt(i); 
           
            if (Character.isDigit(c)) {
            	tieneNumero = true;
            }
            
            if (Character.isUpperCase(c)) {
            	tieneMayuscula = true;
            } 
            
        }
        
        if ( tieneNumero && tieneMayuscula) {
        	System.out.println("La contra es valida!!!");
        	
        } else {
        	System.out.println("La contra necesita al menos: ");
        	
        	if (!tieneNumero) {
        		System.out.println("un numero.");
        	}
        	if (!tieneMayuscula) {
        		
        		System.out.println("Una letra mayuscula.");
        	}
        }
           
        teclado.close();
    }
}
