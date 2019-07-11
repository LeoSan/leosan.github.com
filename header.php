<!DOCTYPE html>
<html>
<head>
		<title>Leonard Cuenca | </title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="content-type" content="text/html; charset=windows-1252">
		
	<!-- Bootstrap -->
		<link href="css/bootstrap_002.css" rel="stylesheet" type="text/css">
		<link href="css/bootstrap.css"     rel="stylesheet" type="text/css">
		<link href="css/blue.css"          rel="stylesheet" type="text/css" media="all">
		<link href="css/hero_word.css"     rel="stylesheet" type="text/css" media="all">
		
	    <link href="css/font-awesome.css" rel="stylesheet" type="text/css">
		<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
		
	<!-- JS -->
		<script src="js/ca-pub-9153409599391170.js" type="text/javascript" async="">	</script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/bootstrap_002.js"></script>
		<script type="text/javascript" src="js/bootstrap.js"></script>
	
	<!--start slider -->
	    <link rel="stylesheet" href="css/fwslider.css" media="all">
	    <script src="js/jquery-ui.js"></script>
	    <script src="js/css3-mediaqueries.js"></script>
	    <script src="js/fwslider.js"></script>
	<!--end slider -->

	<!-- JS ESTUDIOS  -->
		<script type="text/javascript" src="js/jquery_004.js"></script>
		<script type="text/javascript" src="js/jquery_003.js"></script>
		<script type="text/javascript" src="js/jquery_002.js"></script>
		<script type="text/javascript">
			$(function() {

				var filterList = {

					init : function() {

						// MixItUp plugin
						// http://mixitup.io
						$('#portfoliolist').mixitup({
							targetSelector : '.portfolio',
							filterSelector : '.filter',
							effects : ['fade'],
							easing : 'snap',
							// call the hover effect
							onMixEnd : filterList.hoverEffect()
						});

					},

					hoverEffect : function() {

						// Simple parallax effect
						$('#portfoliolist .portfolio').hover(function() {
							$(this).find('.label').stop().animate({
								bottom : 0
							}, 200, 'easeOutQuad');
							$(this).find('img').stop().animate({
								top : -30
							}, 500, 'easeOutQuad');
						}, function() {
							$(this).find('.label').stop().animate({
								bottom : -40
							}, 200, 'easeInQuad');
							$(this).find('img').stop().animate({
								top : 0
							}, 300, 'easeOutQuad');
						});

					}
				};

				// Run the show!
				filterList.init();

			});
		</script>
		<link rel="stylesheet" type="text/css" href="css/jquery.css" media="screen">
	<!-- JS ESTUDIOS  -->
	
	<!--start Codigo Google Analisis -->
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-53207600-1', 'auto');
	  ga('send', 'pageview');

	</script>
	<!--end Codigo Google Analisis -->

	<script type="text/javascript" >
                $(function() {

                // Hero word switcher

                var switcher = $('#hero-word-switcher');
                var delay = 2000;
                var count = switcher.find('strong').length;

                function calculateWidths() {
                    switcher.find('strong').each(function(index) {
                        $(this).attr('data-width', $(this).width());
                    });
                    switcher.width(switcher.find('.active').attr('data-width'));
                }
                calculateWidths();

                $(window).resize(function() {
                    calculateWidths();
                });

                function doChange() {
                    var nextItem;
                    var currentItem = parseInt(switcher.find('.active').attr('data-oid'));

                    if (currentItem == count - 1) {
                        nextItem = 0;
                    } else {
                        nextItem = currentItem + 1;
                    }

                    switcher.addClass('in');

                    switcher.find('[data-oid="' + currentItem + '"]').removeClass('active');
                    switcher.find('[data-oid="' + nextItem + '"]').addClass('active');

                    switcher.width(switcher.find('[data-oid="' + nextItem + '"]').attr('data-width'));
                    setTimeout(doChange, delay);
                }

                setTimeout(doChange, delay);

            });

    </script>
<!-- Animacion con scroll -->
	    <script language="Javascript" type="text/javascript" src="js/aniCroll.js"></script>
	    <script language="Javascript" type="text/javascript" src="js/aniCroll.noeasing.js"></script>


</head>
<body>
	<!-- Start Menu -->
	<div class="header_bg">
		<div class="container">
			<div class="header">
				<div class="logo">
					<div class="rotarY" align="center">
						<a href="#"><img src="imagen/logo2.png" alt=""></a>
					</div>	
					<br />
		
		            <div class="wrapper hero-words" >
		                <h1>
		                    Leonard  
		                    <span id="hero-word-switcher" class="in">
		                        <strong class="active" data-oid="0" data-width="116">Cuenca</strong>
		                        <strong data-oid="1" data-width="84" class="">Analiza</strong>
		                        <strong data-oid="2" data-width="100" class="">Testing</strong>
		                        <strong data-oid="3" data-width="300" class="">Diseña</strong>
		                        <strong data-oid="4" data-width="500" class="">Evalua</strong>
		                        <strong data-oid="5" data-width="600" class="">Codifica</strong>
				                <strong data-oid="6" data-width="700" class="">Innova</strong>
		                    </span>
		                    
		                </h1>
		              
		            </div>
					
				</div>
				<div class="h_menu">
				<a id="touch-menu" class="mobile-menu" href="#">Menu</a>
				<nav>
				<ul class="menu list-unstyled">
					<li class="activate"><a href="index.php">Inicio</a></li>
					<li class=""><a href="estudios.php">Estudios</a></li>
					<li class=""><a href="#">Conocimientos</a>
						<ul class="sub-menu list-unstyled">
							<li><a href="back.php">Back-End</a></li>
							<li><a href="front.php">Front-End</a></li>
							<li><a href="gestion.php">Gestion Proyectos</a></li>
							<li><a href="ambiente.php">Ambientes de Trabajo</a></li>
						</ul>
					</li>
					<li class=""><a href="experiencia.php">Experiencia</a></li>
					<li class=""><a href="desarrollo.php">Desarrollo</a></li>
					<li class=""><a href="contactame.php">Cont&aacute;ctame </a></li>
					
				</ul>
				</nav>
				<script src="js/menu.js" type="text/javascript"></script>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<!-- End Menu -->
