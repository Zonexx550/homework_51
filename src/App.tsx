import "./App.css";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Adder from "./components/Adder";
import ProductCard from "./components/ProductCard";
import ColorSelector from "./components/ColorSelector";

function App() {
  const tasks = [
    { text: "Задача по JavaScript", completed: true },
    { text: "Задача по React", completed: false },
  ];

  const colors = ["red", "green", "blue"];

  return (
    <div className="app-container">
      <section>
        <h2>1. UserProfile</h2>
        <UserProfile name="John Doe" age={30} location="New York" />
      </section>

      <section>
        <h2>2. TodoList</h2>
        <TodoList tasks={tasks} />
      </section>

      <section>
        <h2>3. Adder</h2>
        <Adder num1={5} num2={10} />
      </section>

      <section>
        <h2>4. ProductCard</h2>
        <ProductCard
          title="Laptop"
          price={999.99}
          description="A high-performance laptop"
          imageUrl="./public/laptop.jpg"
        />
      </section>

      <section>
        <h2>5. ColorSelector</h2>
        <ColorSelector colors={colors} />
      </section>
    </div>
  );
}

export default App;
