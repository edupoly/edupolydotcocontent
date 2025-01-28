
public class E4Febonacii {
    static int febo(int n){
        if(n==0 || n==1){

            return n;
        }
        else{
            return febo(n-1)+febo(n-2);
        }
    }
    public static void main(String[] args) {
        System.out.println(febo(10));
    }
}
