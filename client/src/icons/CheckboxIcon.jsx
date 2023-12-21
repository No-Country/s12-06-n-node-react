export default function CheckboxIcon({ id }) {
	return (
		<div className="selector">
			<input type="checkbox" id="selector" name="selector" value={id} />
		</div>
	);
}
