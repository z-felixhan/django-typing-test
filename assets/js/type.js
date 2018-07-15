var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!',
      input: ''
    },
    methods: {
      //Checks if the input corresponds to the text
      check: function() {
        var text = this.text;
        var textWords = this.text.split(" ");
        var inputWords = this.input.split(" ");
        var length = inputWords.length;

        //If input and word matches, word color becomes green
        if (textWords[length - 1] === inputWords[length - 1]) {
          document.getElementById(length - 1).setAttribute("class", "green-text");
        }
        //Otherwise word becomes red
        else {
          document.getElementById(length - 1).setAttribute("class", "red-text");
        }

        //Testing: true if strings are equal, false otherwise
        document.getElementById("answer").innerHTML = (textWords[length - 1] === inputWords[length - 1]);
      },
      //Places new span elements for each word in the text array
      create: function() {
        var textWords = this.text.split(" ");
        var element;
        var node;
        var i;

        for (i = 0; i < textWords.length; i++) {
          element = document.createElement("SPAN");
          node = document.createTextNode(textWords[i] + " ");
          element.appendChild(node);
          element.setAttribute("id", i);
          document.getElementById("spans").appendChild(element);
        }
      },
      //Prevents backspace if there is a blank space
      prevent: function() {

      }
    }
  })

function useCheck() {
  app.check();
}

function useCreate() {
  app.create();
}

useCreate();
useCheck();
