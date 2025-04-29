import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";

const FumettiContext = createContext({
  fumetti: undefined,
  createFumetto: undefined,
  updateFumetto: undefined,
  deleteFumetto: undefined,
  loading: undefined,
  selectedFumetto: undefined,
  setSelectedFumetto: undefined,
  initialLoading: undefined,
  initialError: undefined,
});

const FumettiProvider = ({ children }) => {
  const [fumetti, setFumetti] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedFumetto, setSelectedFumetto] = useState(null);
  const [initialError, setInitialError] = useState(null);

  const axios = useAxios();

  useEffect(() => {
    const fetchFumetti = async () => {
      try {
        setInitialError(null);
        const { data } = await axios.get("/fumetti");
        setFumetti(data);
      } catch (error) {
        setInitialError(error);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchFumetti();
  }, []);

  const createFumetto = async (newFumettoData) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/aggiungifumetto", newFumettoData);
      setFumetti((prev) => [...prev, data]);
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateFumetto = async (id, updatedData) => {
    setLoading(true);
    try {
      const { data } = await axios.put(`/fumetti/${id}`, updatedData);
      setFumetti((prev) => prev.map((f) => (f.id === data.id ? data : f)));
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteFumetto = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`/fumetti/${id}`);
      setFumetti((prev) => prev.filter((f) => f.id !== id));
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <FumettiContext.Provider
      value={{
        fumetti,
        createFumetto,
        updateFumetto,
        deleteFumetto,
        loading,
        selectedFumetto,
        setSelectedFumetto,
        initialLoading,
        initialError,
      }}
    >
      {children}
    </FumettiContext.Provider>
  );
};

export default FumettiProvider;

export const useFumetti = () => useContext(FumettiContext);
