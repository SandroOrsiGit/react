export default function ModalOverlay({ onClick }) {
	const overlayStyles = {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0, 0, 0, 0.75)",
	};

	return <div style={overlayStyles} onClick={onClick}></div>;
}
