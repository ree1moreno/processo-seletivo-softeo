import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { deleteItem, getItemById } from "../services/api";
import { FcCancel } from "react-icons/fc";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles/EditPage.css";
import EditForm from "../components/EditForm";

export default function EditPage() {
  const { id } = useParams();
  const [itemInfo, setItemInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getItemById(id).then((result) => setItemInfo(result));
  }, []);

  const onClick = async () => {
    await deleteItem(id);
    navigate("/");
  };

  return (
    <div className="edit-container">
      <Header />
      <main className="main-container">
        <EditForm itemInfo={itemInfo} />
        <div className="button-container">
          <Link to="/">
            <FcCancel className="cancel-button" />
          </Link>
          <RiDeleteBinLine className="delete-button" onClick={onClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
