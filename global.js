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
    //nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;

	if (a.host === location.host && a.pathname === location.pathname) {
		a.classList.add("current");
	}

	if (a.host !== location.host) {
		a.target = "_blank";
	}

	nav.append(a);
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
		<option value= "light dark" >Automatic</option>
		<option value="light" >Light</option>
		<option value="dark">Dark</option>
		</select>
	</label>`
);


const select = document.querySelector('.color-scheme select');

select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);

	document.documentElement.style.setProperty("color-scheme", event.target.value);

	localStorage.colorScheme = event.target.value
});


document.addEventListener('DOMContentLoaded', (event) => {
    const select = document.querySelector('.color-scheme select');

    // Apply the stored color scheme preference
    if ("colorScheme" in localStorage) {
        document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
        select.value = localStorage.colorScheme; // Update the <select> element to match the stored preference
    }
//when the document reloads
});