import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;


public class Main {
    public static void main(String[] args) {
        //Teste 1
        System.out.println("2018 05 01");
        //Teste 2
        System.out.println(returnConcat(new String[]{"CARLOS","EDUARDO","DA","COSTA"}));
        //Teste 3
        System.out.println(returnGreatest(new int[]{334, 568, 123, 796, 256}));
    }

    //Questão 1
    public static String returnFormattedDate(String dateString) {
        DateTimeFormatterBuilder dateTimeFormatterBuilder = new DateTimeFormatterBuilder()
                .append(DateTimeFormatter.ofPattern("[dd/MM/yyyy]" + "[dd-MM-yyyy]" + "[yyyy-MM-dd]" +"[dd/MM/yyyy]"
                        +"[dd MM yyyy]"+"[MM/dd/yyyy]"+"[ddMMyyyy]"+"[yyyy MM dd]"));
        DateTimeFormatter dateTimeFormatter = dateTimeFormatterBuilder.toFormatter();
        LocalDate receivedDate = LocalDate.parse(dateString, dateTimeFormatter);
        return receivedDate.format(DateTimeFormatter.ofPattern("yyyy MM"));
    }

    //Questão 2
    public static String returnConcat(String[] strings){
        if(strings.length!=0){
            StringBuilder result = null;
            for(int i = 0;i< strings.length;i++){
                if (i==0){
                    result = new StringBuilder(strings[0]);
                } else {
                    result.append(" ").append(strings[i]);
                }
            }
            return result.toString();
        } else {
            return "Array vazio!";
        }
    }

    //Questão 3
    public static int returnGreatest (int[] ints){
        if(ints.length!=0){
            int greatest = ints[0];
            for(int i = 1;i< ints.length;i++) {
                if (ints[i] > greatest) {
                    greatest = ints[i];
                }
            }
            return greatest;
        } else {
            return 0;
        }
    }
}