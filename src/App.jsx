import Header from "./components/HeroNavigation/Header";
import Services from "./components/services/Services";
import { technologies } from "./my_data";
function App() {
  return (
    <main className="font-figtree">
      <Header />
      {/* <section>
        <div>
          <div>
            <h3>Technology I use</h3>
          </div>
          <div>
            {technologies.map((technologie) => {
              const { id, title, img } = technologie;
              return (
                <div className="w-[60px]" key={id}>
                  <img
                    className="w-full h-full object-cover object-center"
                    src={img}
                    alt={title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      <Services />
    </main>
  );
}

export default App;
