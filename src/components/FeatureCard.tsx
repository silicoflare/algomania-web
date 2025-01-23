export default function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="w-full min-h-full clrbdr p-5 md:p-10 flex flex-col items-center">
      <h1 className="w-full font-semibold text-2xl md:text-3xl font-heading text-center text-white">
        {title}
      </h1>
      <div className="w-full h-full text-justify md:text-lg mt-5 md:mt-10">
        {children}
      </div>
    </div>
  );
}
