import { Component, OnInit } from '@angular/core';
//to use jquery -> that's easier
  import * as $ from'jquery'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  	$(document).ready(function(){
    //on click in a miniature image
    	//$('myObject').css('background-image', 'url(' + imageUrl + ')');
          $("#painting").on({
	  			click:function(){
	  			//alert("hola");
	  			var address = "/././assets/img/pinturaGrande.png";
	  			$("#principalText").text("Brindamos el mejor servicio de pintura y enchapado para interiores y exteriores en todo tipo de construcción");
	  			/*$(".text").animate({background-image: "url('/././assets/img/pinturaGrande.png');"},1000);*/
	  			$('.text').css('background-image', 'url(' + address + ')');
	  			}

	  			
  			});

          $("#plumbing").on({
	  			click:function(){
	  				var address = "/././assets/img/plomeriaGrande.png";
	  			//alert("hola");
	  			$("#principalText").text("Construimos canales y reparamos tuberías viejas. ¡Quedarán como nuevas! Hacemos arreglos de primera calidad");
	  			//$(".text").animate({background-image: "url("+direccion+")"},1000);
	  			$('.text').css('background-image', 'url(' + address + ')');
	  			}

	  			
  			});

          $("#electricity").on({
	  			click:function(){
	  				var address = "/././assets/img/electricidadGrande.png";
	  			//alert("hola");
	  			$("#principalText").text("Reparamos tus electrodomésticos y dejamos las instalaciones eléctricas de tu casa en las mejores condiciones");
	  			//$(".text").animate({background-image: "url("+direccion+")"},1000);
	  			$('.text').css('background-image', 'url(' + address + ')');
	  			}

	  			
  			});

          $("#carpentry").on({
	  			click:function(){
	  				var address = "/././assets/img/carpinteriaGrande.png";
	  			//alert("hola");
	  			$("#principalText").text("Ofrecemos el mejor trabajo para la reparación y remodelación de muebles de todo el hogar y la oficina");
	  			//$(".text").animate({background-image: "url("+direccion+")"},1000);
	  			$('.text').css('background-image', 'url(' + address + ')');
	  			}

	  			
  			});
  	});

  	

  }

}
