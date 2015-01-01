<?php $root = $_SERVER['DOCUMENT_ROOT'] . '/demo/makki';?>

<?php include($root . '/components/header.php'); ?>

    <div class="container content-container">

    	<!-- work -->
		<div class="row section">
			<div class="span2 project"><h3>Project Name</h3><p>Project tagline.</p><p><a target="_blank" href="#">Link</a></p></div>
			<div class="span9 offset1">

				<!-- Image -->
				<div class="row">
					<div class="block span9">
						<span data-picture data-alt="PROJECT NAME and Damian Makki">
						        <span data-src="http://placehold.it/780x300"></span>
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
