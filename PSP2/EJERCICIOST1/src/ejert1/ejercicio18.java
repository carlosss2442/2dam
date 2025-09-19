package ejert1;

import java.util.Scanner;

public class ejercicio18 {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introdueix una contrasenya: ");
        String pass = teclado.nextLine();

        // Variables de control
        boolean tieneNumero = false;
        boolean tieneMayuscula = false;
        

       
        if (pass.length() < 5) {
            System.out.println(" La contrasenya ha de tenir almenys 5 caràcters.");
            return;
        }

        
        for (int i = 0; i < pass.length(); i++) {
           char c = pass.charAt(i); 
           
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
        
        System.out.println("Repite la contra: ");
        String contra2 = teclado.nextLine();
        
        if (pass == contra2) {
        	System.out.println("Password vaildo.");
        } else {
        	System.out.println("Password NO valido .");
        }
           
        teclado.close();
    }
}
