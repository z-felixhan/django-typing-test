var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!',
      input: ''
    },
    methods: {
      check: function() {
        var textWords = this.text.split(" ");
        var inputWords = this.input.split(" ");
        var length = inputWords.length;

        //Testing: true if strings are equal, false otherwise
        document.getElementById("answer").innerHTML = (textWords[length- 1] === inputWords[length - 1]);

        //Testing
        //document.getElementById("inputWords").innerHTML = inputWords;
        //document.getElementById("length").innerHTML = length;
      }
    }
  })

function useCheck() {
  app.check();
}

useCheck();