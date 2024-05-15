type TLayoutWrapper = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: Readonly<TLayoutWrapper>) {
  return (
    <div className="h-full w-full grid sm:grid-cols-[14rem,auto] lg:grid-cols-[18rem,auto] relative ">
      {children}
    </div>
  );
}
