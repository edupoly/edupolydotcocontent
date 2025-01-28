public class E5FebonaciiSeries {
    static int febonacii(int x){
        if(x==1 || x==0){
            return x;
        }
        else{
            return febonacii(x-1)+febonacii(x-2);
        }
    }
    static void feboSeries(int n){
        if(n>=0){
            feboSeries(n-1);
            int fnum=febonacii(n);
            System.out.println(fnum);
        }
    }
    public static void main(String[] args) {
        feboSeries(10);
    }
}
