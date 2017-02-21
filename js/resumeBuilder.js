/*
This is empty on purpose! Your code to build the resume will go here.
 
 $("#main").append("Vinicius Martins");

 var awesomeThoughts = "My name is Vinicius and i am awesome";
 

var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts);


var name = "Vinicius Martins";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

/*var bio ={
	"name" : "Vinicius Martins Santos",
	"role" : "Web Developer",
	"contacts": "viniciusmarsan@gmail.com",
	"biopic": "images/me.jpg"
}
 $("#header").append(bio.name);
 $("#header").append(bio.role);
 $("#header").append(bio.contacts);
 $("#header").append(bio.biopic);*/
 
var bio = {
	"name" : "Vinicius Martins",
	"role" : "Web Developer",
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image" : "images/me.jpg",
	"contacts" : [{
		"mobile" : "xx-xxxx-xxxx",
		"skype" : "viniciusmarsan", 
		"location" : "Brazil",
		"email" : "viniciusmarsan@gmail.com"
	}],	
	"skills" : ["skill1","skill2","skill3","skill4"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Example", 
		"title" : "Web-developer",
		"dates" : "20xx - 20xx",
		"location" : "Brazil",
		"description" : "Example"
	},
	{
		"employer" : "Example2", 
		"title" : "Web-developer",
		"dates" : "20xx - 20xx",
		"location" : "Brazil",
		"description" : "Example2"	
	}]
};

var projects = {
	"project" : [{
		"title" : "Some project ",
		"dates" : "20xx", 
		"description" : "Some description", 
		"images" : ["images/portfolio-1.jpg","images/portfolio-2.jpg"]
	},
	{
		"title" : "Some other project",
		"dates" : "20xx", 
		"description" : "some description", 
		"images" : ["images/portfolio-1.jpg","images/portfolio-2.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Some university",
		"location" : "Brazil",
		"degree" : "bachelor", 
		"majors" : "Some major",
		"dates" : "20xx - 20xx",
		"url" : "soome.url"
	},
	{
		"name" : "Some university",
		"location" : "Brazil",
		"degree" : "bachelor", 
		"majors" : "Some major",
		"dates" : "20xx - 20xx",
		"url" : "soome.url"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "20xx - 20xx",
		"url" : "https://www.udacity.com.br"
	}]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();


$("#mapDiv").append(googleMap);