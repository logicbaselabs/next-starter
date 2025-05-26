import wait from "@/utils/wait";

export default async function HeavyComponent() {
  await wait();

  return (
    <h1 className="text-center font-bold pb-20">🧳 I am a heavy component</h1>
  );
}
