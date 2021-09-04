// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.changeName = (name) =>
//     // this.name = name;
//     this.changeName = function (name) {
//         this.name = name;
//     }
// }



// var obj = {
//     age: 0,

//     set ageInfo(age) {                              //Định nghĩa setter
//         console.log('setter - ' + age);
//         this.age = age;
//     },

//     get ageInfo() {                                 //Định nghĩa getter
//         console.log('getter');
//         return "Thông tin tuổi: " + this.age;
//     }
// };

// obj.ageInfo = 25;          //Gán -> Tự động gọi settter
// alert(obj.ageInfo);        //Không phải gán -> Tự động gọi getter





// //Tạo đối tượng
// var p = new person();
// p.name = "Phat"
// p.changeName("John");
// console.log(p.name);
//   //Giờ p.name bằng "John"




  // mảng chứa object 
  // Đối tượng Comment
var Comment = {
    title   : "",
    content : "",
    email   : "",
    fullname : ""
};
 
// Khởi tạo mảng
var Comments = [];
 
// Gán giá trị cho phần tử mảng
Comments[0] = Comment;
Comments[1] = Comment;
 
// Gọi tới thuộc tính
Comments[0].title = "Tiêu đề bình luận";
alert(Comments[0].title);
Comments[1].title = "Tiêu đề bình luận";
alert(Comments[1].title);

 //hoặc 
 
// // Khởi tạo mảng
// var Comment = [{
//     title   : "",
//     content : "",
//     email   : "",
//     fullname : "" 
// }];
 
// // Sử dụng
// Comment[0].title = "Tiêu đề bình luận";
alert(Comment[0].title);

