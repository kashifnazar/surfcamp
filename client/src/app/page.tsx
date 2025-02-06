async function loader() {
  const response = await fetch("http://localhost:1337/api/home-page");
  const data = await response.json();
  return data;
}

export default async function Home() {
  const {
    data: { title, description },
  } = await loader();

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
