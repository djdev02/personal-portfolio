import java.util.*;
import java.lang.*;
import java.io.*;

class Sum{
    public static void main(String args[]){
        int arr[] = new int[9];
        Scanner sc =new Scanner(System.in);
        for(int i=0;i<9;i=i+1){
            arr[i]=sc.nextInt();
        }
        Arrays.sort(arr);
        int len = arr.length;
        System.out.println(arr[len-2]);
    }
}