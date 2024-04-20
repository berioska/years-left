import {
  default as Carousel,
  default as StyledComponents,
} from "../dashboard/Stepper";

export default function Home() {
  const items = [
    { item: "hola mundo" },
    { item: "hola mundo" },
    { item: "hola mundo" },
    // Agrega más elementos según sea necesario
  ];
  return (
    <section>
      <StyledComponents />
      <Carousel items={items} />
      <div>gola</div>
      <div>gola</div>
      <div>gola</div>
    </section>
  );
}
