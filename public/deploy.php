<?php
$commands = [
  'echo $PWD',
  'whoami',
  'git branch -r',
  'sudo git pull'
];

foreach ( $commands as $command )
{
  $tmp = shell_exec( $command );
  echo '<pre>' . htmlentities( trim( $tmp ) ) . "\n</pre>";
}
