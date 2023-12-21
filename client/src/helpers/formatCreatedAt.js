export const formatCreatedAt = dateString => {
	const currentDate = new Date();
	const commentDate = new Date(dateString);
	const timeDifference = currentDate - commentDate;

	// Calculate the difference in seconds, minutes, hours, days, months and years
	const seconds = Math.floor(timeDifference / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);

	if (seconds < 60) {
		return "Hace unos segundos";
	} else if (minutes < 60) {
		return `Hace ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
	} else if (hours < 24) {
		return `Hace ${hours} ${hours === 1 ? "hora" : "horas"}`;
	} else if (days === 1) {
		return "Hace un día";
	} else if (days < 7) {
		return `Hace ${days} días`;
	} else if (weeks === 1) {
		return "Hace una semana";
	} else if (weeks > 1) {
		return `Hace ${weeks} semanas`;
	}
};
