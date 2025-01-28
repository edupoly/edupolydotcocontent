public class E6TriangularNumber {
    static int TriNum(int n){
        if(n==1){return 1;}
        return n+TriNum(n-1);
    }
    static void TriNumSeries(int n){
        if(n>0){
            TriNumSeries(n-1);
            System.out.println( TriNum(n));
        }
    }
    public static void main(String[] args) {
        TriNumSeries(5);
    }
}
