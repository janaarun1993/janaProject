import Card from './Card';
import CardTable from './CardTable';
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
       navigate("/");
  };

  const Response_data = 
  {"username": "hari", "card2" : 
  {"title": "Lorem Ipsum", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}, 
  "card3": {"table_headers": ["s.No", "Name", "City"], "data": ["1", "Hari", "Chennai"]}, 
  "card4": {"title":"Projected Launch Date","content":"MM/DD/YYYY"}}

    return (
     <div>
      <div className="card-button">
      <button type="submit" onClick={handleSubmit}>Logout</button>
      </div>
      <div className="card-container">
        <Card title={Response_data.username}/>
        <Card title={Response_data.card2.title} content={Response_data.card2.content}/>
        <CardTable 
          Sno={Response_data.card3.table_headers[0]}
          Name={Response_data.card3.table_headers[1]}
          City={Response_data.card3.table_headers[2]}
          sdata={Response_data.card3.data[0]}
          sName={Response_data.card3.data[1]}
          sCity={Response_data.card3.data[2]}
        />
        <Card title={Response_data.card4.title} content={Response_data.card4.content}/>
      </div>
      </div>
      
    );
  }
  
  export default Dashboard;
  