<?php $root = $_SERVER['DOCUMENT_ROOT'] . '/makki';?>

<?php $pageTitle='Top Gan Drone'; ?>
<?php $pageDescription='Top Gan Drone - a brand and website design project with Damian Makki of makki.pro.'; ?>

<?php include($root . '/../components/header.php'); ?>

    <div class="container content-container">

    	<!-- work -->
		<div class="row section">
			<div class="span2 project"><h3>Top Gan Drone</h3><p>Drone's are becoming the next big thing. TopGan Drone needed a brand identity and website that reflected the technical and futuristic nature of drones.</p><p><a target="_blank" href="http://www.topgandrone.com">Visit TopGan Drone</a></p></div>
			<div class="span9 offset1">

				<!-- Image -->
				<div class="row">
					<div class="block span9">
						<span data-picture data-alt="TopGan Drone and Damian Makki">
						        <span data-src="img/tgd-hero.jpg"></span>
						</span>
					</div>
				</div>

				<!-- Comments -->
				<div class="row">
					<div class="comments span9"><p>This is a comments template.</p></div>
				</div>
		</div>
		<!-- /work -->
	</div>
	</div> <!-- /container -->


	<style>
		@media all and (max-width: 767px) {
			.tagline, .main-nav{display:none;}
			.navbar{min-height:0;}
		}
	</style>

	<?php include($root . '/featured/featured-components.php'); ?>

	<?php include($root . '/components/footer.php'); ?>
