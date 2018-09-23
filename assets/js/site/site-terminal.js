// Responsible for the functionality of the site's pseudo-terminal.

// Class name for any terminal object
var terminalClassName = 'navTerminalChild';

$(document).ready(function(){
  function updateTerminal(update) {
    $('.navTerminalChild').terminal().echo(update);
  }
  function randomizeEcho(items, multi = 300) {
    $('.navTerminalChild').terminal().echo(items[0]);
    if (items[1]) {
      setTimeout(function() { randomizeEcho(items.slice(1), multi); }, Math.floor(Math.random() * multi));
    }
  }
  jQuery(function($, undefined) {
    $('.navTerminalChild').terminal(function(command) {
      if (command !== '') {

        var cmd = command.toUpperCase().split(" ");

        // If you are looking here, shame on you because this is a lame way of finding the commands
        // but all the power to you <3
        if (cmd[0] == 'ECHO') {
          var output = '';
          for (var i = 1; i < cmd.length; i++) {
            output += cmd[i];
            output += ' ';
          }
          this.echo(String(output));
        }
        else if (cmd[0] == 'LYDD') {
          if (cmd[1]) {
            if (cmd[1] == 'START') {
              if (cmd[2]) {
                if (cmd[2] == '') {

                }
              }
            }
          }
          else {
            this.echo('***************************************');
            this.echo('** Application [[b;#00ffff;]LOW YIELD DAEMON] v2.3 **');
            this.echo('** developed by [[b;#ff00ff;]metakun technologies] **');
            this.echo('***************************************');
            this.echo('used to host decentralized kaizen');
          }
        }
        else if (cmd[0] == 'READ') {
          if (cmd[1]) {
            if (cmd[1] == 'MANTRA' || cmd[1] == 'MANTRA.A' ) {
              randomizeEcho(['lie','cheat','steal','kill','win','win','...','Everybody doin it'], 300);
            }
          }
          else {
            this.echo('// Application 9m [[b;#00ffff;]SECUREADER] 4tb //');
            this.echo('for all your file-reading needs');
            this.echo('comes standard with [[b;#00ffff;]NUT] since 3.01');
          }
        }
        else if (cmd[0] == 'HELP') {
          randomizeEcho(['Locating [[b;#00ff36;]help] file...',
            'message found: >Fuck off<',
            'File path corrupted. Please consult an administrator.',
            '[[b;#ff00ff;]Help file not found]'], 500);
        }
        else if (cmd[0] == 'PING') {
          randomizeEcho(['To use this application',
            '---'], 500);
        }
        else if (cmd[0] == 'CHAT') {
          randomizeEcho(['This kaizen is currently offline.',
            'Exiting application.'], 800);
        }
        else if (cmd[0] == 'SWEDUS') {
          randomizeEcho(['GAME VER 5.2',
            'This application is currently in development.'], 800);
        }
        else if (cmd[0] == 'SAXX') {
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop" muted><source src="/assets/video/saxx.mp4" type="video/mp4"></source></video>').appendTo( "div" );
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop"><source src="/assets/video/saxx.mp4" type="video/mp4"></source></video>').appendTo( "body" );
        }
        else if (cmd[0] == 'HOWARD') {
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop" muted><source src="/assets/video/howard.mp4" type="video/mp4"></source></video>').appendTo( "div" );
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop"><source src="/assets/video/howard.mp4" type="video/mp4"></source></video>').appendTo( "body" );
        }

      }
    }, {
      greetings: '*** Welcome to [[b;#00ffff;]NUT] 3.88 ***',
      name: 'terminal',
      prompt: '//> ',
      onFocus: function(terminal){ $('.navTerminalChild').addClass('activeTerminal'); },
      onBlur: function(terminal){ $('.navTerminalChild').removeClass('activeTerminal'); },
      onInit: function(terminal){
        this.echo('LOADING organizational_matrix...');
        this.echo('[[b;#ff00ff;]WARNING]: TERMINAL UNSTABLE');
      },
      outputLimit: 30
    });
  });
  
});