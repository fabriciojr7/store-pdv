export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Login Layout</h2>
      {children}
    </div>
  );
}
