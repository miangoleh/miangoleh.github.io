Hello!


Description


<html>
<head>
    <title>Random Link Redirect</title>
    <script>
        function redirectRandomLink() {
            // Specify the list of links
            var links = [
                "https://www.example1.com",
                "https://www.example2.com",
                "https://www.example3.com",
                "https://www.example4.com",
                "https://www.example5.com"
            ];

            // Generate a random index within the range of available links
            var randomIndex = Math.floor(Math.random() * links.length);

            // Redirect the user to the randomly selected link
            window.location.href = links[randomIndex];
        }
    </script>
</head>
<body>
    <h1>Random Link Redirect</h1>
    <button onclick="redirectRandomLink()">Redirect Me!</button>
</body>
</html>

