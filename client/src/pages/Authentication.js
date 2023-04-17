import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

export default function Authentication() {
  const navigate = useNavigate();
  const { user } = useAppContext();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, navigate]);

  return (
    <main className="page">
      <AuthForm />
    </main>
  );
}
