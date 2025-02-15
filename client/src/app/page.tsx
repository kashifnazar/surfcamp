import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log(data);
  return { ...data.data };
}

export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks ?? [];
  console.log("data", JSON.stringify(data, null, 4));

  return (
    <div>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
