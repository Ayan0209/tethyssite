var express = require('express');
var router = express.Router();
var mailer = require('nodemailer');

var smtpTransport = mailer.createTransport("smtps://YOUREMAIL%40gmail.com:"+encodeURIComponent('PASSWORD') + "@smtp.gmail.com:465");

var team = [
  {
    name: "Akhilesh Gautam",
    about: "A thought leader in public policy, inclusive development and government advisory",
    description: "Akhilesh has more than two decades of professional career experience in public policy and inclusive development. Most recently from, in his leadership a highly successful project got completed with USAID assistance reaching out to 143 Cities, 12 State Governments and 88 Million population with improved implementation capacities for Swachh Bharat Mission (Urban). Prior to this, he served as a United Nations staff member (2000-2011) during which time he led Water, Sanitation & Hygiene (WASH) Section for UNICEF Chhattisgarh and served as Chief of Social Policy, Planning, Monitoring & Evaluation Section in UNICEF Uttar Pradesh. For almost about 5 years, he contributed to German Government’s (GIZ) bi-lateral cooperation with Indian Ministry of Urban Development and 5 state governments of Himachal Pradesh, Chhattisgarh, Andhra Pradesh, Uttar Pradesh and Kerala for Support to National Urban Sanitation Policy (SNUSP) primarily responsible for establishment of State Urban Sanitation Policy with Governments of Himachal Pradesh, Chhattisgarh, Andhra Pradesh and Kerala and implementation of City Sanitation Plans. He is an alumnus of School of Urban Planning, CEPT University Ahmedabad. He is member of Institute of Town Planners India and American Planning Association.",
    image: "Akhilesh.jpeg"
  },
  {
    name: "Ar. Priti Gautam",
    about: "Architect with specialization in private sector participation & public infrastructure projects",
    description: `Priti is a qualified Architect from MANIT Bhopal with more than 12 years of experience in building
    designing, planning, execution and supervision of public infrastructure projects with IL&FS,government organisations of North Bengal and Chhattisgarh and other private consultancy
    organisations.
    Priti’s core competence includes ability to analyse, prioritise and synthesise the project brief and
    context and subject them to critical appraisal, so as to produce a coherent and well resolved
    solution. Manage each project with focus on team co-ordination and timelines.
    Priti is member of the Council of Architecture and Institution of Valuers, India. She has worked in
    several states of India including Uttar Pradesh, Madhya Pradesh, Chhattisgarh and West Bengal.`,
    image: "Priti.jpeg"
  },
  {
    name: "Kumar Abhishek",
    about: ".",
    description: `Kumar is a powerhouse of support to start up and nascent private sector engagement in the range of sector, more specifically urban water, sanitation and hygiene industry. Kumar has about 4 years of experience in creating an interface between private sector and water and sanitation utilities after having completed his Bachelor’s degree in Physical planning from School of Planning and Architecture, Delhi and a Masters' in Environmental Planning from CEPT University, Ahmedabad.`,
    image: "Kumar.jpeg"
  },
  {
    name: "Vivek Mehta",
    about: "Civil Engineer from NIT, Surat and Infrastructure Planner from CEPT University  ",
    description: `Vivek is a Civil Engineer from NIT, Surat and Infrastructure Planner from CEPT University. He has more than 5 years of experience working on Infrastructure and Urban Development projects. Over the years, he has been associated with various reputed organizations in India and has given his professional service to several Urban Local Bodies. Water & Sanitation and Urban Governance are his areas of special interest. His expertise on Faecal Sludge and Septage Management (FSSM) is fairly well acknowledged in the sector`,
    image: "Vivek.jpeg"
  },
  {
    name: "Mr. K Nagasreenivas",
    about: "Development Planning & Management consultant",
    description: "Mr. K Nagasreenivas is a Development Planning & Management consultant with 21 years of experience in urban infrastructure planning & financing, rural systems development and infrastructure integration. With a Master’s degree in Urban Engineering and Bachelor’s degree in Civil Engineering (B.E.), he has worked full-time in different capacities at international bilateral institution, grant-making not-for-profit national foundation, national management consultancy and international development sector agency. He has successfully contributed to 80+ projects so far on programme management and institutional development (10 years) and consultancy services (11 years). His scale of urban sectoral experience includes slums, areas/zones, city, regional, policy development; pilot projects to institutional reforms. He brings to the team extensive experience in projects aided by international agencies, aided projects, Government projects and private sector. He is well aware of the planning nuances in many states of India, viz. Tamil Nadu, Karnataka, Tripura, Andaman & Nicobar Islands, Uttar Pradesh, Andhra Pradesh, Telangana, Himachal Pradesh, Kerala, and Chhattisgarh and linguistically able to communicate in 6 languages.",
    image: "Srinivas.jpeg"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tethys Development Services' , layout: "layout", team: team});
});

router.get("/about", (req,res)=> {
  res.render('about', { title: "About Us | Tethys", layout:"layout", team: team });
});

router.get("/events", (req,res)=> {
  res.render('events', { title: "Events | Tethys", layout:"layout" });
});

router.get("/ourwork", (req,res)=> {
  res.render('ourwork', { title: "Our Work | Tethys", layout:"layout" });
});

router.get("/resources", (req,res)=> {
  res.render('resources', { title: "Resources | Tethys", layout:"layout" });
});

router.get("/news", (req,res)=> {
  res.render('news', { title: "News | Tethys", layout:"layout" });
});

router.get("/support", (req,res)=> {
  res.render('support', { title: "Request Support | Tethys", layout:"layout" });
});

router.post("/contactus", (req,res)=> {
  var mail = {
    from: "Shubham Agarwal <shubh.mischieveous@gmail.com>",
    to: req.body.email,
    subject: "Send Email Using Node.js",
    text: "Node.js New world for me",
    html: "<b>Node.js New world for me</b>"
  }

  smtpTransport.sendMail(mail, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }
      smtpTransport.close();
  });

  res.redirect("/#support")
});

module.exports = router;
