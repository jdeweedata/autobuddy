@"
import React from 'react';
import Header from '../../components/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-xl">Get in touch with the AutoBuddy team.</p>
      </main>
    </div>
  );
}
"@ | Out-File -FilePath "src\app\contact\page.tsx" -Encoding utf8