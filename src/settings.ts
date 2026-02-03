export const profile = {
	fullName: 'Gavin Deane',
	title: 'Computer Science Masters Student',
	institute: 'University of Waterloo',
	author_name: 'Gavin Deane', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Game Theory',
			description: 'I enjoy modeling competition and cooperation in games, economics, and society',
			field: 'mathematics',
		},
		{
			title: 'MultiAgent Systems',
			description: 'I am interested in how self-interested agents (AI or human) interact in various settings',
			field: 'computer-science'
		},
		{
			title: 'Theory of Mind',
			description: 'It fascinates me to think about how humans (and AI systems) model the world',
			field: 'physics'
		},
		{
			title: 'Artificial Intelligence',
			description: 'I believe that attempting to build and understand AI systems leads us to a greater understanding of our own cognition',
			field: 'engineering'
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'gdeane@uwaterloo.ca',
	linkedin: 'https://www.linkedin.com/in/gdeane/',
	x: '',
	bluesky: '',
	github: 'https://github.com/Gdeane',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://gavindeane.com', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'emerald', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'night', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/astro_academia_portfolio' // Repository name starting with /
}

export const seo = {
	default_title: 'Gavin Deane',
	default_description: 'Gavin Deane personal portfolio',
	default_image: '/images/astro-academia.png',
}
