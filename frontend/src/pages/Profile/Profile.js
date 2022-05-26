import React, { useEffect, useState } from "react";
import { Alert, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { deleteUser } from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUser } from "./GetUser";
// import { useParams } from "react-router";

const Profile = () => {
  const { user } = useSelector((state) => state.loginDetails);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // let { oneuser } = useSelector((state) => state.getUser);
  const handledelete = (e) => {
    e.preventDefault();
    dispatch(deleteUser(user.userLogin._id));
  };  


  useEffect(() => {
    if (!user) {
      navigate(`/login`);
    }
  }, [user, navigate]);
  return (
    <div>
      <GetUser />

      <Button
        style={{ backgroundColor: "#40798c", border: "none" }}
        onClick={() => setShow(false)}
      >
        Delete Account
      </Button>

      <Alert show={!show} variant="success">
        <Alert.Heading>Are you sure?!</Alert.Heading>
        <p>we are sad because you left we</p>
        <hr />
        <div className="d-flex justify-content-end">
          {!show && (
            <Button onClick={() => setShow(true)} variant="outline-success">
              No i'm not leaving you!
            </Button>
          )}
          <LinkContainer to={"/login"}>
            <Nav.Link onClick={handledelete}>
              go to hell{" "}
            </Nav.Link>
          </LinkContainer>
        </div>
      </Alert>
    </div>
  );
};

export default Profile;
