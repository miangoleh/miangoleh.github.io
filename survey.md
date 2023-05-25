# The survey is now closed.

## Thank you for participating in our Image Compositing Evaluation Survey!

<html>
<head>
<meta charset="UTF-8">
<script>
  var countdown = 5; // Set the countdown time in seconds

  // Function to update the countdown timer
  function updateCountdown() {
    var countdownElement = document.getElementById('countdown');
    countdown--;
    countdownElement.innerText = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      window.location.href = 'https://miangoleh.github.io/'; // Replace with your desired URL
    }
  }

  // Start the countdown timer
  var timer = setInterval(updateCountdown, 1000); // Update every 1 second
</script>
</head>
<body>
<p>Redirecting to main page in <span id="countdown">5</span> seconds...</p>
</body>
</html>


<!-- ## Instructions:
In this survey, you will be presented with pairs of composited images along with a mask that highlights the composited region, such as the box in the example below. Your objective is to choose the image that, in your opinion, showcases superior compositing quality. Please take your time to carefully examine each image pair and determine which one has **the foreground object better matching the background environment**.

<img src="./survey_example.jpeg" alt="Example" style="width: 600px; height: 400px;">

## Survey Completion:

Thank you once again for your participation. Let's begin the evaluation of image compositing quality!

<html>
<head>
    <title>Image Compositing Survey</title>
    <style>
    .my-button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      background-color: #4CAF50;
      color: #fff;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    .my-button:hover {
      background-color: #45a049;
    }
    </style>
    <script>
        function redirectRandomLink() {
            // Specify the list of links
            var links = [
                "https://www.surveymonkey.ca/r/NXSQDMR",
                "https://www.surveymonkey.ca/r/NXSTFB6",
                "https://www.surveymonkey.ca/r/NXS3982",
                "https://www.surveymonkey.ca/r/NXSL2V3",
                "https://www.surveymonkey.ca/r/NXSDGJV"
            ];

            // Generate a random index within the range of available links
            var randomIndex = Math.floor(Math.random() * links.length);

            // Redirect the user to the randomly selected link
            window.location.href = links[randomIndex];
        }
    </script>
</head>
<body>
    <a class="my-button" onclick="redirectRandomLink()">Click Here to Start the Survey</a>
</body>
</html>

 -->
