<?php $pageTitle='NYC Designer and Developer'; ?>
<?php $pageDescription='Damian Makki is a creative web and print designer based out of New York City.'; ?>

<?php
	include('components/header.php');
	require('components/dribbble.php');
	$client = new Dribbble\Api\Client();
?>

    <div class="container content-container">

    	<!-- featured work -->
		<div id="featured-work" class="row section">
			<div class="span2 label"><h3>featured work!!</h3></div>
			<div class="span9 offset1">
				<div class="row">
					<div class="block span5">
						<a href="featured/tequila-avion">
							<span data-picture data-alt="Taxi Magic">
						        <span data-src="img/tequila-avion-hero.jpg"></span>
						        <span data-src="img/tequila-avion-hero.jpg" data-media="(min-device-pixel-ratio: 2.0)"></span>
						        <span data-src="img/tequila-avion-hero-alternate.jpg" data-media="(max-width: 767px)"></span>
							</span>
						</a>
					</div>
					<div class="block span4">
						<a href="featured/neso">
							<span data-picture data-alt="neso Tents">
						        <span data-src="img/neso-hero.jpg"></span>
						        <span data-src="img/neso-hero.jpg" data-media="(min-device-pixel-ratio: 2.0)"></span>
						        <span data-src="img/neso-hero-alternate.jpg" data-media="(max-width: 767px)"></span>
							</span>
						</a>
					</div>
				</div>
				<div class="row">
					<div class="block span4">
						<a href="featured/taxi-magic">
							<span data-picture data-alt="Taxi Magic">
						        <span data-src="img/taxi-magic-hero.jpg"></span>
						        <span data-src="img/taxi-magic-hero.jpg" data-media="(min-device-pixel-ratio: 2.0)"></span>
						        <span data-src="img/taxi-magic-hero-alternate.jpg" data-media="(max-width: 767px)"></span>
							</span>
						</a>
					</div>
					<div class="block span3">
						<a href="featured/top-gan-academy">
							<span data-picture data-alt="Top Gan Academy">
						        <span data-src="img/top-gan-hero.jpg"></span>
						        <span data-src="img/top-gan-hero.jpg" data-media="(min-device-pixel-ratio: 2.0)"></span>
						        <span data-src="img/top-gan-hero-alternate.jpg" data-media="(max-width: 767px)"></span>
							</span>
						</a>
					</div>
					<div class="block span2">
						<a href="featured/vivid-software-solutions">
							<span data-picture data-alt="Vivid Software Solutions">
						        <span data-src="img/vivid-software-solutions-hero.jpg"></span>
						        <span data-src="img/vivid-software-solutions-hero.jpg" data-media="(min-device-pixel-ratio: 2.0)"></span>
						        <span data-src="img/vivid-software-solutions-hero-alternate.jpg" data-media="(max-width: 767px)"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /featured work -->

		<!-- latest work -->
		<div id="latest-work" class="row section">
			<div class="span2 label"><h3>latest work</h3></div>
			<div class="span9 offset1">
				<div class="row">
					<?php
try {
$shots = $client->getPlayerShots('damianmakki');
							foreach ($shots->shots as $shot) {
								printf('<div class="block span4 shot"><a target="_blank" href="%s"><img src="%s"></a></div>', $shot->url, $shot->image_url);
								}
} catch (Dribbble\Api\Exception $e) { var_dump($e->getMessage()); }

					?>
				</div>
			</div>
		</div>
		<!-- /latest work -->

		<!-- contact -->
		<div id="contact" class="row section">
			<div class="span2 label"><h3>contact</h3></div>
	<div class="social span9 offset1">I'm currently <span class="yup">available</span><!--<span class="nope"> not available</span>--> for freelance and contract work.</div>

			<div class="social span9 offset1"><a href="mailto:damian@makki.pro"><i class="icon-envelope"></i> damian@makki.pro</a></div>
			<div class="social span9 offset3"><a target="_blank" href="http://dribbble.com/damianmakki"><i class="icon-dribbble"></i> damianmakki</a></div>
			<div class="social span9 offset3"><a href="skype:damian.makki?call"><i class="icon-skype"></i> damian.makki</a></div>
			<div class="social span9 offset3"><a target="_blank" href="https://twitter.com/damianmakki"><i class="icon-twitter-sign"></i> @damianmakki</a></div>
			<div class="social span9 offset3"><a target="_blank" href="https://linkedin.com/in/damianmakki"><i class="icon-linkedin-sign"></i> Damian Makki</a></div>
			<div class="social span9 offset3"><a target="_blank" href="https://github.com/damianmakki"><i class="icon-github-sign"></i> damianmakki</a></div>

					</div>
		<!-- /contact -->
	</div> <!-- /container -->

<?php include('components/footer.php'); ?>
