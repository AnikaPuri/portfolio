console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

//const navLinks = $$("nav a");

//let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

/*
currentLink.classList.add("current");

if (currentLink) { // or if (currentLink !== undefined)
	currentLink.classList.add("current");
}
*/

//currentLink?.classList.add("current");

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"},
    {url: "resume/", title: "Resume"},
    {url: "https://github.com/AnikaPuri", title: "Profile"}
	
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
	let url = p.url;
	let title = p.title;

    if (!ARE_WE_HOME && !url.startsWith("http")) {
     	url = "../" + url;
    }

    
    // url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
	// Create link and add it to nav
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

}


