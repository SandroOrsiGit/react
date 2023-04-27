import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";

export default function ModalDialog({ onClick, title, children }) {
	const modalDialogStyles = {
		position: "fixed",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 999,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div style={modalDialogStyles}>
			<ModalOverlay onClick={onClick}></ModalOverlay>

			{/* wit vlak */}
			<ModalContent title={title} onClick={onClick}>
				{children}
			</ModalContent>
		</div>
	);
}
