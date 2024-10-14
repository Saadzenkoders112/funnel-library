import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard/route');
  return null; // No content needed as the redirect happens
}
