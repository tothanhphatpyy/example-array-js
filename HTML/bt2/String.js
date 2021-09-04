// // var ham = function(){
// //     var ho ="To",ten= "Phat";
// // var hoten= ho + ten;

// // var a= 1,b=2;
// // var c = a<b;
// // console.log(c);
// // }
// // ham();

// //gộp 2 chuỗi
// // var test = function(){
// //     var commentTest = "To";   
// //     var authorName = "Thanh Phat";
// //     var fullCommentText = `${commentTest} ${authorName}`;
// //     alert(fullCommentText);
// // }

// // // thay thế chuỗi
// //    var test = function(){
// //       var chuoi1 = "To Thanh Phat";
// //       var chuoi2 = chuoi1.replace(/Thanh/g, "Van");
// //       console.log(chuoi2);
// //    }


// //              BT1: Kiểm tra chuỗi có rỗng hay không

// //   // var test = function(){
// //   //     var chuoi1 = "To Thanh Phat";
// //   //     if ( chuoi1.length ===0 ){
// //   //       console.log("Chuỗi rỗng ")
// //   //     }
// //   //     else{
// //   //       console.log("Chuỗi có kí tự");
// //   //     }
// //   //   }
// //     //cách 2
// //    var test = function( chuoi1 ){
// //      if( chuoi1.length == 0 ){
// //        return true;
// //      }
// //      else{
// //       return false;
// //    }
// //   }
// //    console.log(test("To Thanh Phat"));


// // //           BT2: Tính độ dài và xác định có phải chuỗi không
// // var test = function(){
// //   //   var chuoi1 = 'To Thanh Phat';
// //   //   var hamktchuoi = function(){
// //   //   if(typeof chuoi1 == "string" && chuoi1.length >=1){
// //   //     return true;
// //   //   }
// //   //   else{
// //   //     return false;
// //   //   }
// //   // }
// // }
// //   // if ( hamktchuoi() == true ){
// //   //   var dodai = chuoi1.length;
// //   //   console.log(dodai);
// //   //   alert("Day la chuoi");
// //   //   alert(dodai);
// //   // }
// //   // else{
// //   //   alert("Day la so");
// //   // }
// // //
// // }

// //             BT3,4: Tách chuỗi và chuyển thành mảng
// //  var test = function(){
// //       var chuoi1 = "To Thanh Phat";
// //       // var ten = chuoi1.slice(3,9); // cắt từ vị trí số 3 đến số 9
// //       // console.log(ten);

// //       // cách2
// //   var test = function(){
// //     var chuoi1 = "To Thanh Phat";
// //   console.log(chuoi1.length);
// //   var ten = chuoi1.split(" ");
// //   console.log(ten);
// //   console.log(ten.length);
// //   console.log(ten[1]);
// // }
// // //          BT5: Chuyển đổi chuỗi ở dạng viết tắt. Vd: To Thanh Phat ==> TTP
// // var test = function (string) {
// //   var string2 = new Array();

// // var string1 = string.split(" "); // chuyển chuỗi thành mảng
// // if (string1.length > 1) {
// //   for (var i = 0; i < string1.length; i++) {
// //     string2.push(string1[i].charAt(0));
// //     }
// //     return string2.join(""); //chuyển mảng thành chuỗi
// //   }
// //   else {
// //     return string.charAt(0);
// //   }
// // }
// // console.log(test("To Thanh Phat"));

// //          BT6: Ẩn địa chỉ email người dùng. Vd : tothanhphatpyy@gmail.com ==> tot**********y@gmail.com ( số lượng kí tự ẩn = số lượng *)

// // var test = function (string) {
// //    var string1 = string.split("@"); //chuyển chuỗi string thành mảng string[0] và string[1] bởi dấu @
// //    var string2 = string1[0].split(""); //cắt phần tử string[0] thành 1 mảng
// //    string2 = string2.join("");
// //    var string3 = string2.slice(3, string2.length - 1); // cắt mảng từ vị trí 3 đến vị trí length -1
// //    string3 = string3.join("");// chuyển mảng vừa cắt thành chuỗi
// //    var string4 = "*";
// //    for (var i = 0; i < string3.length - 1; i++) {
// //       string4 = string4.concat("*");
// //    }

// //    string2 = string2.replace(string3, string4);// chuyển xong phần chuỗi trước @
// //    return (string2 + string1[1]); // gộp phần chuỗi vừa chuyển xong + chuỗi tên miền

// // }
// // console.log(test("tothanhphatpyy@gmail.com"));


// //      BT7: In hoa chữ cái đầu
// //TH1: phat ==> Phat
//    //  var string = "phat";
//    //  string = string.charAt(0).toUpperCase() +string.slice(1);
//    //  console.log(string);

// //TH2: to thanh phat ==> To Thanh Phat

//   //C1:
//    //     var string = "to thanh phat";
//    //     var string1 = string.split(" "); // cắt chuỗi thành mảng
//    //     var string2="";
//    //      for( var i=0 ; i < string1.length ; i ++){
//    //       string2 =string2.concat(string1[i].charAt(0).toUpperCase() + string1[i].slice(1).toLowerCase() + " ");
//    //       }
//    //    console.log(string2);

//    // //C2:
//    //    function string(str)
//    //    {
//    //      console.log(/\w\S*/g);
//    //     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//    //    }
//    //    console.log(string("to thanh phat"));


//    BT8: Chuyển chữ hoa thành chữ thường và ngược lại
// swapcase = function swapcase(str) {
//    return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
//       //  return chr ? match.toUpperCase() : match.toLowerCase();
//       return match.toUpperCase();
//    });
// }
// console.log(swapcase('AaBbc'));



//      BT9: Chèn chuỗi vào vị trí cụ thể

// function string(){
//     var string1 = "Hôm nay tôi không đến trường";
//     var string2 = " mưa ";
//     var string3 = string1.slice(0,7) + string2 + string1.slice(7);
//     console.log(string3);
// }
// string();


//         BT10: Cắt chuỗi thành đoạn có độ dài cho trước

// function test(string, dd) {
//     var i = 0;
//     do {

//         var string1 = string.slice(0, dd);
//         console.log(i);
//         i = i+ dd;

//     } while (i = string.length - dd);


// }

// test("abcdefghik", 2);


// //         BT11: tìm số lần xuất hiện trong chuỗi

// function test(string,string1){
//     var sl = 0;
//     string2 = string.split(" ");
//     console.log(string1);
//     for( var i=0; i < string2.length ; i++){
//         if( string1 == string2[i]){
//             sl++;
//         }
//     }
//     console.log(sl);
// }

// test("To Thanh Phat","Phat");

//            BT12: Viết một hàm JavaScript để cắt ngắn một chuỗi thành một số từ nhất định

// function test(string,count){
//     string1 = string.split(" ");
//     string2 = string1.slice(0,count);
//     string2 = string2.join(" ");
//     console.log(string2);
// }
// test("To Thanh Phat",2);


//         BT13 : Tìm kiếm từ trong chuỗi không phân biệt chữ hoa chữ thường

// function test(string,string1){
//       if(string.toUpperCase().search(string1.toUpperCase()) == -1){
//           console.log("Khong tim thay!");
//       }
//       else{
//           console.log(string);
//       }
// }
// test("To Thanh Phat", "phat");

//