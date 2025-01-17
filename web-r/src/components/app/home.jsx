import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Container, Label } from "@/components/ui";
import { useAppCache } from "@/hooks/use-cache";

const Home = (props) => {

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("info");

  return (
    <Container className="block flex-1 p-0 shadow-none">
      {message != null && (
        <Card bsStyle={messageType}>
          <CardContent>{message}</CardContent>
        </Card>
      )}
      <Label className="text-lg">Warcraft III Data</Label>
      <PatchList/>
    </Container>
  )
}

const PatchList = () => {
  const { versions } = useAppCache();
  if (Object.keys(versions).length === 0)
    return;
  
  return (
    <ul>
      {Object.entries(versions).sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10)).map(([id, name]) => (
        <li key={id}><Link to={`/${id}`}>Patch {name}</Link></li>
      ))}
    </ul>
  )
}

const MapLink = ({id, name, desc}) => {
  name = name && name.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, "");
  desc = desc && desc.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, "");
  if (desc) {
    return <Link to={`/${id}`}>{name} <span className="desc">{desc}</span></Link>;
  } else {
    return <Link to={`/${id}`}>{name}</Link>;
  }
};

export { Home }

