public class E1Print1to10{
    static void series(int i){
        if(i>0){
            series(i-1);
            System.out.println(i);
        }
    }
    public static void main(String[] args) {
        series(10);
    }
}