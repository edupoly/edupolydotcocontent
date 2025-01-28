public class E3Factorial {
    static int facto(int n){
        if(n==1){
            return 1;
        }
        else{
            int x=facto(n-1);
            return n*x;
            //return n*facto(n-1)//ofcourse we can write like this but for better understanding write like above
        }
    }
    public static void main(String[] args) {
        System.out.println(facto(9));
    }
}
