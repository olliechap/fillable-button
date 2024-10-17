import { FillableButton } from "@/components/fillable-icon-button";


export default function Home() {
  return (
    <div className="flex flew-wrap items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FillableButton background="bg-yellow-200" fillBackground="bg-pink-300" maxClicks={8} size="sm"/>
      <FillableButton background="bg-gray-200" fillBackground="bg-yellow-300" maxClicks={8} size="md"/>
      <FillableButton background="bg-green-200" fillBackground="bg-pink-500" maxClicks={8} size="lg"/>
      <FillableButton background="bg-blue-200" fillBackground="bg-black" maxClicks={8} size="xl"/>
    </div>
  );
}
