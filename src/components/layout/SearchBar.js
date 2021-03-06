
export default function SearchBar() {
  return (
    <nav style={{marginBottom: "30px" }} className="blue">
    <div className="nav-wrapper" >
      <form>
        <div className="input-field">
          <input style={{border: "none" }} id="search" type="search" required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}
