export default function FancyBorder({ color, children }) {

    const fancyBorderStyles = {
        border: '5px',
        borderStyle: 'solid',
        borderColor: color,
    }
    return <div style={fancyBorderStyles}>
        {children}
    </div>

}