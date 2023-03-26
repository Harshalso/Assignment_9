# Assignment_9

<html>
  <head>
    <title>Check if a number is divisible by 3</title>
  </head>
  <body>
    <h1>Check if a number is divisible by 3</h1>
    <input type="text" id="numberInput" placeholder="Enter a number">
    <button id="checkButton">Check</button>
    <p id="result"></p>
    <script>
      const checkButton = document.getElementById("checkButton");
      const numberInput = document.getElementById("numberInput");
      const result = document.getElementById("result");

      checkButton.addEventListener("click", function() {
        const number = parseInt(numberInput.value);
        if (number % 3 === 0) {
          result.innerText = "The number is divisible by 3.";
        } else {
          result.innerText = "The number is not divisible by 3.";
        }
      });
    </script>
  </body>
</html>
