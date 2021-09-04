//         BT1: Kiểm tra xem có phải mảng không
// function test(){
//     var input = [3,2,1,9];
//     console.log(typeof input === "object");
// }
// test();


//       BT2: Chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào giữa 3 số đầu, và mỗi lần 4 số tiếp theo. 
//       Ví dụ: nếu bạn chấp nhận 0869017747, đầu ra phải là 086-0917-747

// function nhapSDT(sdt){
//     var string = sdt.toString().slice(0,3); // lấy 3 số đầu trước
//     var n =sdt.toString().length/4;
//     var p =3;

//     for (var i =0; i <n; i++){
//         string = string + "-" + sdt.toString().slice(p, p+4);  //lấy lần lượt 4 số
//          p+=4;
//     }
//     var string = string.substring(0,string.length-1); 
//     console.log(string);
// }
// nhapSDT("0869017747");


//      BT3: Lấy ra n phần tử cuối mảng

// function test(array,n){
//      return array.slice(array.length -n);
// }

// console.log(test([2,3,1,0],2));

//       BT4: Sắp xếp mảng và chọn ra phần tử xuất hiện nhiều nhất

// function test(array1){
//     console.log(array1);
//     var max =0;
//     var solan =0;
//     var arraymax;
//     for( var i =0; i < array1.length ; i++){
//         for(var j =i; j < array1.length ; j++){
//             if( array1[i] == array1[j]){
//                   solan++;
//             }
//             if (solan>max){
//                 max =solan;
//                 arraymax= array1[i];
//             }
//         }
//     }
//     console.log(arraymax +"," + solan);
// }
// test([2,3,1,4,2,5,2]);

//        BT5: Tính tổng 2 mảng theo từng giá trị

// function test(){
//     var array2 = [2,3,1,4,6];
//     var array1= [1,4,2,5,6,5,4];
//     var array3= [];
//     if(array1.length > array2.length){
//         for(var i =0; i < array2.length ; i++){
//             array3[i] = array1[i] + array2[i];
//         }
//         for(var i=array2.length ; i< array1.length ; i++){
//         array3.push(array1[i]);
//         }
//       console.log(array3);
//     }
// }
// test();

//     BT6: Gộp 2 mảng
// function test(){
//     var array1 = [2,3,1,4,6];
//     var array2 =v [1,4,2,5,6,5,4];
//     var array3= [];
//     var max = array1.length + array2.length;
//     for(var i =0; i< max ; i ++){
//         if(i < array1.length){
//          array3.push(array1[i]);
//         }
//         else{
//             array3.push(array2[i- array1.length] );
//         }
//     }
//     console.log(array3);
// }
// test();

//       BT7: Tìm cặp phần tử có tổng bằng 5

// function test(){
//     var array2 =[1,2,3,4,5,6,0,-1];
//     var soCap=0;
//     for(var i= 0; i < array2.length -1 ; i++){
//         for(var j= i+1; j < array2.length ; j++){
//             if(array2[i]+ array2[j] ==5){
//                  soCap++;
//             }
//         }

//     }
//     console.log(soCap);
// }
// test();

//       BT8 : Gộp 2 mang và bỏ phần tử trùng lặp
// function test() {
//     var array1 = [2, 3, 1, 4, 6];
//     var array2 = [1, 4, 2, 5, 6, 5, 4];
//     var array3 = [];
//     var max = array1.length + array2.length;
//     for (var i = 0; i < max; i++) {
//         if (i < array1.length) {
//             array3.push(array1[i]);
//         }
//         else {
//             for (var k = 0; k < array1.length; k++) {
//                 for (var l = 0; l < array2.length; l++) {
//                     if (array1[k] != array2[l]) {
//                         array3.push(array2[i - array1.length]);
//                     }
//                 }
//             }
//         }
//     }
//     console.log(array3);
// }
// test();