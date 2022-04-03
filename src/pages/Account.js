import React, {useContext, useEffect} from 'react';
import "../styles/account.css"
import AnnouncementForm from "../components/AnnouncementForm";
import {IsAuthenticatingContext} from "../providers/isAuthenticatingProvider";

const Account = () => {
  const { setIsAuthenticating } = useContext(IsAuthenticatingContext)

  useEffect(() => {
    setIsAuthenticating()
  }, []);


  return (
    <div className="accountContainer">
      <div className="profile">
        Tu bedzie profil pzdr 600 100900!!!!!!!!!!!!!!
      </div>
      <div className="form">
        <AnnouncementForm />
      </div>
    </div>
  );
};

export default Account;
