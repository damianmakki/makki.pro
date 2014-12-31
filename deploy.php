<?php
$commands = [
  'echo $PWD',
  'whoami',
  'git branch -r',
  'sudo git pull -v',
  'git status',
  'git submodule sync',
  'git submodule update',
  'git submodule status'
];

foreach ( $commands as $command )
{
  $tmp = shell_exec( $command );
  echo '<pre>' . htmlentities( trim( $tmp ) ) . "\n</pre>";
}
