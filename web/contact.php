
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Get in touch!!!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link  rel='stylesheet' href="styles.css" type="text/css" media='all' />
</head>
<body class="contact">
  <header class="col-10 contactPage">
    <div class="menuSwitch" id="menuSwitch" onclick="myFunction(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </header>
  <main class="col-10 row hero_contact">
    <div class="containerContactMe">
      <div id="successMessege"></div>
      <div id="contactMe">
        <h4 id="contactHeader"></h4>
        <input id="fcontactName" name="fcontactName" placeholder="* Your Name" type="text" required="">
        <input id="fcontactEmail" name="fcontactEmail" placeholder="* Your Email Address" type="email" required="">
        <input id="fcontactTelephone" name="fcontactTelephone" placeholder="Your Phone Number" type="tel">
        <input id="fcontactWebsite" name="fcontactWebsite" placeholder="Your Web Site starts with http://" type="url">
        <textarea id="fcontactMessage" name="fcontactMessage" placeholder="* Type your Message Here...." required=""></textarea>
        <button name="submit" type="submit" id="contact-submit" onclick="sendEnquiryform()">Submit</button> 
      </div>
    </div>
  </main>
  <nav class="something" id="navOptions">
    <ul>
      <li><a class="effect-underline" href="./index.html">Home</a></li>
      <li><a class="effect-underline" href="./work.html">Work</a></li>
      <li><a class="effect-underline" href="./skills.html">Skills</a></li>
      <li><a class="effect-underline" href="./contact.html">Contact</a></li>
    </ul>
  </nav>
  <footer class="col-10">
    <p>© Copyright for any material published on this website is reserved by <a href="#">https://www.CaliUI.com</a></p>
  </footer>
  
  <script src="interactions.js" type="text/javascript" charset="utf-8"></script>
  <script src="formSubmit.js" type="text/javascript" charset="utf-8"></script>
  <script>
    typeWriterText = 'Please fill in the form to get in touch!!!';
    typeWriterTextHolder = document.getElementById("contactHeader");
    typeWriter();
  </script>
</body>
</html>

