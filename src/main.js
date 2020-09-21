import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from "jquery";
import  GalacticAge from "./../src/galaxyyear.js";

$(document).ready(function(){
$("form#age").submit(function (event){
  event.preventDefault();


let earthYear = parseInt($("input#age").val());
$("#earthAge").text(GalacticAge.earthYear);
$(".result").show();
});
});