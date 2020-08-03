export const genres = [
	{ _id: "5b21ca3eeb7f6fbccd471818", name: "Lost" },
	{ _id: "5b21ca3eeb7f6fbccd471814", name: "Found" }
];

export function getGenres() {
	return genres.filter(g => g);
}
