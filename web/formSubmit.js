function sendEnquiryform(){
  console.log("Button was clicked");
  var FrmBox = document.getElementById('contactMe');
  var successMessegeFlag = document.getElementById('successMessege');
  var jname= document.getElementById('fcontactName').value;
  var jemail= document.getElementById('fcontactEmail').value;
  var jphone= document.getElementById('fcontactTelephone').value;
  var jweb= document.getElementById('fcontactWebsite').value;
  var jmessage= document.getElementById('fcontactMessage').value;

  var formFields = ["fcontactName", "fcontactEmail", "fcontactTelephone", "fcontactWebsite", "fcontactMessage"];

  for (var i=0; i < formFields.length; i++) {
      if(document.getElementById(formFields[i]).checkValidity() === false) {
          document.getElementById(formFields[i]).style.cssText="border: 2px solid red";
          //console.log("there was something wrong in the form");
          return false;
      }
      
      if(document.getElementById(formFields[i]).checkValidity() === true) {
          document.getElementById(formFields[i]).style.cssText="border: 1px solid white";
      }
      
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "send_mail.php");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var dataToSend = "name=" + jname + "&email=" + jemail  + "&phone=" + jphone  + "&web=" + jweb + "&message=" + jmessage;
  xhr.send(dataToSend);
      
  xhr.onload = function(){
      if(xhr.readyState === 4 && xhr.status === 200) {
          FrmBox.style.display='none';
          successMessegeFlag.style.cssText="display:block";
          successMessegeFlag.innerHTML= xhr.responseText;
          setInterval(bringBackForm, 30000);
      }
  }
}