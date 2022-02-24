import axios from "../services/api";
import { Form, Card, Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

const Home = () => {
   const [emojis, setEmojis] = useState([]);
   const [searchText, setSearchText] = useState("");
   useEffect(() =>{
       const loadEmojis = async() => {
           const response = await axios.get("/ahfarmer/emoji-search/master/src/emojiList.json");
           
            setEmojis(response.data);
       }
       loadEmojis();
       console.log(searchText)
   })
   return(
       <>
       
        <Container fluid  style={{margin: "20px 0px"}}>  
            <Form.Control size="lg" type="text" placeholder="pesquise aqui..." onChange={event => setSearchText(event.target.value)}/>
        </Container> 

        <Container fluid style={{display: "flex",justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {emojis.filter((emoji) => {
                if (searchText === ""){
                   return emoji;
                }else if (emoji.title.toLowerCase().includes(searchText.toLocaleLowerCase())){
                    return emoji;
                }
            }).map((emoji, key) => 
           
                <Card border="primary" key={key} style={{width: "18rem", marginBottom: "20px"}}>
                    <Card.Header>{emoji.title}</Card.Header>
                    <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>{emoji.symbol}</p>
                        <footer className="blockquote-footer">
                        <p>{emoji.keywords}</p>
                        </footer>
                </blockquote>
                </Card.Body>
            </Card>
            )}
        </Container>
       </>
   )
}
export default Home;