import { BookDemoForm } from "./BookDemoForm";

export const LandingHero = () => {
  return (
    <section className="h-screen bg-blue-700 flex items-center justify-center flex-col gap-y-[50px]">
      <hgroup className="space-y-4">
        <h1 className="text-[6.25rem] font-bold text-white text-center max-w-6xl mx-auto">
          The Finance Solutions For Your Business
        </h1>
        <p className="text-2xl text-white font-light text-center max-w-3xl mx-auto">
          Empower your finance team. The onestop plateform for all financial
          management of small and medium-sized business.
        </p>
      </hgroup>
      <BookDemoForm />
    </section>
  );
};
