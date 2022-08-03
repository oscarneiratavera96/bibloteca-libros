import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/Store";

const Index = () => {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
