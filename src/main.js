import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from "jquery";
import  GalacticAge from "./../src/galaxyyear.js";

$("form#age").submit(function (event){
  event.preventDefault();
})

let earthAge = $("input#age").val;
$("#earthAge").text(GalacticAge.earthYear);
$(".result").show();
console.log(earthYear);
