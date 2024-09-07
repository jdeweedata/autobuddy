import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to AutoBuddy</h1>
        <p className="mt-4 text-xl">Your AI-powered automotive assistant</p>
      </main>
    </div>
  );
}
