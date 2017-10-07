/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //IT74 G076 0102 8000 0101 6906 495
 /*$("#main").append("Masih");*/
 
var bio = {
	"name" : "Masih Ariani",
	"role" : "Front-End Developer",
	"contacts" : {
		"email" : "masih.ariani@gmail.com",
		"mobile" : "0049-999-5454",
		"location" : "Freiburg-im-Breisgau",
		"github" : "/MasihAriany"
	},
	"bioPic" : "images/18.jpg",
	"welcomeMessage" : "Welcome to my Page",
	"skills" : [" JavaScript", " JQuery", " Bootstrap", " HTML5", " CSS", " AngularJS", "KnockoutJS"],
	
	display : function(){
		var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);


		//$("#main").append(internationalizeButton);
		$("#header").append(formattedName);
		$("#header").append(formattedRole);
		$("#header").append(formattedPhone);
		$("#header").append(formattedLocation);
		$("#header").append(formattedPic);
		$("#header").append(formattedEmail);
		$("#header").append(formattedGithub);

		if ( bio.skills.length > 0 ) {
			$("#header").append(HTMLskillsStart);
			for ( var i=0; i < bio.skills.length; i++ ){
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#header").append(formattedSkills);
			}
		}
	}
};


var projects = {
	"projects" : [
	{
		"title" : "neighborhood Map",
		"dates" : "2017",
		"description" : "A single page application featuring a map of Manhattan neighborhood was developed. additional functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content was also added."
	},
	
	{
		"title" : "Interactive Resume",
		"dates" : "2017",
		"description" : "Generating a Resume only with JavaScript and JQuery. Also showing my Projects and places of work and study both in description and Google Map API."
	},
	
	{
		"title" : "Ethernet switch simulator",
		"dates" : "2014",
		"description" : "In a total of three months, a simulator of a network switch was implemented. All was done under the supervision of Dr. Reza Sameni"
	},
	{
		"title" : "Astroids Game",
		"dates" : "2013",
		"description" : "coded in Python. Velocity and collision was considered. also has sound and a little animation."
	}
	]
		
};
		
var education = {
  "schools" : [
    {
      "name" : "ShirazUniversity",
      "location" : "Shiraz",
	  "degree" : "BSc",
	  "major" : ["computer", " science", " hardware", " engineering"],
	  "degreeDates" : "2015"
    },
    {
      "name" : "Uni-Freiburg",
      "location" : "Freiburg im Breisgau",
	  "degree" : "MSc",
	  "major" : ["CS", " Information science"],
	  "degreeDates" : "2019"
    }
  ],
  "onlineCourses" : [
    {
		"title" : "javaScripts",
		"school" : "udacity",
		"dates" : "2017",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"
	}
  ],
  
  display : function(){
	if ( education.schools.length > 0 ) {
		for ( var i=0; i < education.schools.length; i++ ){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].degreeDates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
	if ( education.onlineCourses.length > 0 ) {
		$("#education").append(HTMLonlineClasses);
		for ( var i=0; i < education.onlineCourses.length; i++ ){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			//$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
  }
}


var work = {
	"jobs" : [
	  {
		"title" : "Packer",
		"employer" : "Wisma GmbH",
		"dates" : "2016-2017",
		"location"  : "Freiburg",
		"description" : "Just a temporary job that would cover my rent and insurance expenses while I am living in Germany now."
	  },
	  {
		"title" : "Researcher",
		"employer" : "Shiraz University",
		"dates" : "2014-2015",
		"location"  : "Shiraz",
		"description" : "First experience as a researcher with my Professor, Dr. Reza Sameni. worked on Android and FPGA in two summers."
	  }
	]
}
/*var education = {};
education["name"] = "Tohid";
education["years"] = "4";
education["city"] = "Shiraz";*/


function inName (inputString){
	firstName = inputString.split(" ")[0];
	lastName = inputString.split(" ")[1].toUpperCase();
	firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
	return firstName + " " + lastName;
}

function displayWork(){

	for ( job in work.jobs ) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedAll = formattedWorkEmployer + formattedWorkTitle + formattedWorkdates + formattedWorkCity + formattedWorkDescription;
		
		$(".work-entry:last").append(formattedAll);
	}
}
//encapsulating display into Projects object:
projects.display = function(){
	if ( projects.projects.length > 0 ) {
		for ( var i=0; i < projects.projects.length; i++ ){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectDescription);
		}
	}
	
}();
bio.display();
displayWork();
education.display();
$("#mapDiv").append(googleMap);



	





 