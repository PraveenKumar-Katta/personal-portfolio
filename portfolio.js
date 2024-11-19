<!DOCTYPE html>
<html>
  <head>
    <title>myPortfolio</title>
    <style>
      body {
        background-color: #A9A9A9;
        margin: 0;
      }
      a:hover {
        color: #DC143C;
      }
      h1 {
        text-align: center;
        font-family: "Faculty Glyphic", sans-serif;
      }
      p {
        font-family: "Ubuntu", sans-serif;
      }
      #projects {
        display: flex;
        flex-wrap: row;
      }
      .projects {
        flex: 1 1 45%;
        border: 1px solid #ccc;
        border-radius: 2%;
        padding: 15px;
        text-align: left;
      }
      img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
      }
      .img {
        text-align: center;
      }
      #skills {
        border: 1px solid #ccc;
        cursor: pointer;
        padding: 10px;
      }
      #skills ul {
        list-style-type: none;
        padding: 0;
      }
      .items {
        padding: 8px;
        transition: background-color 0.3s ease;
      }
      #contact-info{
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="heading">
      <h1>PRAVEEN KUMAR KATTA</h1>
      <p><strong>Software Developer</strong></p>
      <p>I am an aspiring software developer passionate about creating efficient, innovative, and user-friendly applications. With a foundation in web development, I am expanding my knowledge of programming languages and software design principles to become a skilled developer. My current projects include building websites, personal portfolios, and interactive applications using HTML, CSS, and JavaScript, and I am continually learning more advanced skills.</p>
      <br>
      <div class="img">
        <img src="https://res.cloudinary.com/djgazplad/image/upload/v1731516323/1658858764535_xfzmbw.jpg" alt="myimage">
      </div>
    </div>

    <h3>Skills</h3>
    <div id="skills">
      <ul>
        <li class="items">HTML</li>
        <li class="items">CSS</li>
        <li class="items">JavaScript</li>
        <li class="items">MySQL</li>
        <li class="items">DBMS</li>
        <li class="items">Problem Solving</li>
      </ul>
    </div>

    <h3>Projects</h3>
    <div id="projects">
      <div class="projects">
        <p><strong><u>Personal Portfolio Website</u>:</strong> Using HTML, CSS developed a personal portfolio to showcase my skills and projects in web development. It helped me to enhance my skills. The portfolio serves as a professional presentation of my work, highlighting my basic knowledge and creativity. <a href="https://onecompiler.com/html/42xyxyeep">link</a></p>
      </div>
      <div class="projects">
        <p><strong><u>Calculator</u>:</strong> First and foremost, I have created a Functional Calculator using HTML, CSS, and JavaScript with beautiful designs and a user-friendly interface. <a href="https://functionalcalculator-pk.netlify.app/">link</a></p>
      </div>
    </div>

    <p id="contact-info"><u>Show Contact Info</u></p>
    <p id="contactNo"><u></u></p>

    <script>
      // Show contact info on click
      document.getElementById("contact-info").addEventListener("click", function() {
        document.getElementById("contact-info").textContent = "Email: praveenkumar5500u@gmail.com";
        document.getElementById("contactNo").textContent = "Mobile: +91 8125469177";
      });

      // Highlight individual skill on hover
      const skillItems = document.querySelectorAll('.items'); // Select all skill items

      skillItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
          item.style.backgroundColor = "#DC143C";  // Change background color on hover
          item.style.color = "white";              // Change text color to white on hover
        });

        item.addEventListener("mouseout", function() {
          item.style.backgroundColor = "";        // Revert background color
          item.style.color = "";                   // Revert text color
        });
      });
    </script>
  </body>
</html>
