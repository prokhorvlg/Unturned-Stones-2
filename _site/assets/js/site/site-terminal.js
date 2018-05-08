// Responsible for the functionality of the site's pseudo-terminal.

// Class name for any terminal object
var terminalClassName = 'navTerminalChild';

$(document).ready(function(){
  jQuery(function($, undefined) {
    $('.navTerminalChild').terminal(function(command) {
      if (command !== '') {

        console.log(command);
        var cmd = command.toUpperCase().split(" ");

        if (cmd[0] == 'ECHO') {
          var output = '';
          for (var i = 1; i < cmd.length; i++) {
            output += cmd[i];
            output += ' ';
          }
          this.echo(String(output));
        }

      }
    }, {
      greetings: '*** Welcome to [[b;#00ffff;]NUT] 3.88 ***',
      name: 'terminal',
      prompt: '//> ',
      onFocus: function(terminal){ $('.navTerminalChild').addClass('activeTerminal'); },
      onBlur: function(terminal){ $('.navTerminalChild').removeClass('activeTerminal'); },
      outputLimit: 20
    });

    updateTerminal('LOADING organizational_matrix...');
    updateTerminal('[[b;#00ffff;]WARNING]: TERMINAL UNSTABLE');
  });
  
});

function updateTerminal(update) {
  $('.navTerminalChild').terminal().echo(update);
}

/* $(document).ready(function(){
  $('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
      e.preventDefault();
      commandEnter($(this).val());
    }
  });
});

function updateTerminal(update) {

  $('.' + terminalClassName).append(update);
  $('.' + terminalClassName).scrollTop($(this)[0].scrollHeight);

}

function updateTerminalCustom(update, terminal) {

  $('.' + terminal).append(update);
  $('.' + terminal).scrollTop($(this)[0].scrollHeight);

}

function commandEnter(input) {

  var cmd = input.split(" ");
  if (cmd[0] == 'echo') {
    var output = '';
    for (var i = 1; i < cmd.length; i++) {
      output += cmd[i];
      output += ' ';
    }
    output += '<br>';
    updateTerminal(output);
  }

} */