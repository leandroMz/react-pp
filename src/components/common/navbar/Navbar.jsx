const Navbar = () => {
    return (
        <ul style={
            {
                width: "100%",
                height: "50px",
                border: "2px solid black",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                listStyle: "none",
                cursor: "pointer"
            }
        }>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
        </ul>
    )
}
export default Navbar