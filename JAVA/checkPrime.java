//write java program to check prime number
import java.util.Scanner; 
public class checkPrime{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        int flag = 0;
        for(int i = 2; i <= n/2; i++) {
            if(n % i == 0) {
                flag = 1;
                break;
                }
                }
                if(flag == 0) {
                    System.out.println("Yes");
                    }
                    else {
                        System.out.println("No");
                        }
                        }
                        else {
                            System.out.println("No");
                            }
}    




