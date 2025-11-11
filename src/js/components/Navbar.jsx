import ToDoIcon  from "./Img/ToDoIcon.png";

export const Navbar = () => {

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="display-1" src={ToDoIcon} alt="Bootstrap" width="50" height="50" />
                    </a>
                </div>
            </nav>
        </>
    )
}