import { Link } from "react-router-dom";

function ProjectList() {
    return (
        <>
            <hr style={{ marginTop: '50px', marginLeft: '0px', maxWidth: "400px", border: "1px dashed #999", }} />
            <ul>
                <li>
                    <Link className="link" to="/showcolor">Show me the color!</Link>
                </li>
                <li>
                    <Link className="link" to="/converthex">Who the hex rgb?</Link>
                </li>
                <li>
                    <Link className="link" to="/whathex">What the hex?</Link>
                </li>
            </ul>
        </>
    );
}

export default ProjectList;