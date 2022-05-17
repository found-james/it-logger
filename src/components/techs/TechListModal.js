import { useEffect, useState } from "react";
import TechItem from "./TechItem";

export default function TechListModal() {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    
    const getTechs = async () => {
        setLoading(true);
        const res = await fetch("/techs");
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

  return (
      <div id="tech-list-modal" className="modal">
          <div className="modal-content">
              <h4>Technician List</h4>
              <ul className="collection">
                  {!loading && techs.map(tech => (<TechItem tech={tech} key={ tech.id } /> ))}
              </ul>
          </div>
      </div>
    
  )
}
