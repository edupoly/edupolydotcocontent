public class E2Print10to1{
    static void series(int i){
        if(i>0){
            System.out.println(i);
            series(i-1);
        }
    }
    public static void main(String[] args) {
        series(10);
    }
}