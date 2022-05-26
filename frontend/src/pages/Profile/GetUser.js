import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getNewUser } from "../../Redux/Actions/userActions";
// import Editbutton from "./Editbutton";

export const GetUser = () => {
  const dispatch = useDispatch();
  let { oneuser } = useSelector((state) => state.getUser);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getNewUser(id));

  }, [dispatch, id]);

  return (
    <>
      <div className="margintop">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0">
            <div className="col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-black">
                <div className="m-b-25">
                  {" "}
                  {/* <img
                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                    className="img-radius"
                    alt="User-Profile-Image"
                  />{" "} */}
                </div>
                <h6 className="f-w-600">
                  Name:<br/>
                  {oneuser && oneuser.oneuser.Name}
                  {/* {console.log(user)} */}
                </h6>

          
                {/* <Editbutton id={id} /> */}

                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                  Information
                </h6>
              
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Phone Number:</p>
                    <h6 className="text-muted f-w-400">
                      {" "}
                      {oneuser && oneuser.oneuser.telephoneNumber}                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Email:</p>
                    <h6 className="text-muted f-w-400">
                      {" "}
                      {oneuser && oneuser.oneuser.email}                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};
