LOCATIONS = [ 
	{
		"id": 1,
		"name": "Museum",
		"videoId": "dd2byOFsXpo",
		"startTime": 13
	},
	{
		"id": 2,
		"name": "Space",
		"videoId": "Y_plhk1FUQA",
		"startTime": 29
	},
	{
		"id": 3,
		"name": "Nature",
		"videoId": "ynLpZGegiJE",
		"startTime": 19
	},
	{
		"id": 4,
		"name": "By The Window",
		"videoId": "iLs04Z6uBqU",
		"startTime": 43
	},
	{
		"id": 5,
		"name": "Campfire",
		"videoId": "-wKiNZ-u-HA",
		"startTime": 91
	},
	{
		"id": 6,
		"name": "Library",
		"videoId": "YQc4WT0yDH4",
		"startTime": 18
	},
	{
		"id": 7,
		"name": "Sunset",
		"videoId": "A2_yg19Pu7Y",
		"startTime": 18
	},
]

function chooseRandomLocation() {
	const availableLocations = LOCATIONS.filter(({id}) => state.currentLocation ? state.currentLocation.id !== id : true);
	
	return availableLocations[Math.floor(Math.random() * availableLocations.length)];
}

function changeLocation(locationId) {
	if (state.currentLocation && locationId == state.currentLocation.id)
		return;

	changeLoadingState(true);

	const location = LOCATIONS.find(location => location.id == locationId);

	state.currentLocation = location;

	// changeLocationText(location.name);
	changeVideoSource(location.videoId);
	// changeRadio(location.radio);
	toggleActiveClassOnLocation(location.id);
	playVideo(location);
}
