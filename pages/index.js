import { Navbar, ListGroup } from "flowbite-react";
import { Image } from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="w-48">
        <ListGroup>
          <ListGroup.Item
            active={true}
            onClick={function onClick() {
              return alert("Profile clicked!");
            }}
          >
            Profile
          </ListGroup.Item>
          <ListGroup.Item>Settings</ListGroup.Item>
          <ListGroup.Item>Messages</ListGroup.Item>
          <ListGroup.Item>Download</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
