import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from "jquery";
import  GalacticAge from "./../src/galaxyyear.js";

$("form#user").submit(function (event){
  event.preventDefault();
})

let earthYear = $("input#age").val();

$("input#age").val();
