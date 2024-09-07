@"
import React from 'react';
import Header from '../../components/Header';

export default function About() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">About AutoBuddy</h1>
        <p className="mt-4 text-xl">Learn more about our AI-powered automotive assistant.</p>
      </main>
    </div>
  );
}
"@ | Out-File -FilePath "src\app\about\page.tsx" -Encoding utf8