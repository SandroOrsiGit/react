import ModalContentHeader from "./ModalContentHeader";

export default function ModalContent({ title, children, onClick }) {
	const modalContentStyles = {
		position: "relative",
		backgroundColor: "white",
		padding: "1rem",
		maxWidth: "400px",
	};

	return (
		<div style={modalContentStyles}>
			<ModalContentHeader onClick={onClick} title={title}>
				{children}
			</ModalContentHeader>
			<div>{children}</div>
		</div>
	);
}
