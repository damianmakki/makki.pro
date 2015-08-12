	<div class="footer">
		<div class="container">
			© <?php echo date("Y"); ?> Damian Makki
		</div>
	</div>
    <!-- Javascript -->
	<script src="http://www.makki.pro/assets/js/app.js"></script>
    <script src="http://www.makki.pro/assets/js/bootstrap.js"></script>
	
	<!--SVG Fallback-->
    <script>
		if(!Modernizr.svg) {
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
				});
		}
	</script>
	
	<!-- Google Analytics -->
		<script type="text/javascript">
		
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-31260263-1']);
		  _gaq.push(['_setDomainName', 'makki.pro']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		
		</script>

  </body>
</html>