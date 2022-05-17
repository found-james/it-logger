import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js"

export default function AddTechModal() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(false);

    const onSubmit = () => {
        if (firstName === "" || lastName ===""){
            M.toast({ html: "Please enter first name and last name" });
        } else {
          setFirstName("");
          setLastName("");
        }
    }

  return (
    <div id="add-tech-modal" className="modal">
        <div className="modal-content">
            <h4>New Technician</h4>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="firstName" value={ setFirstName } onChange={ e => setFirstName(e.target.value) } />
                    <label htmlFor="firstName" className="active">First Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="lastName" value={ setFirstName } onChange={ e => setFirstName(e.target.value) } />
                    <label htmlFor="lastName" className="active"> Last Name</label>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={ onSubmit } className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    </div>
  )
}

