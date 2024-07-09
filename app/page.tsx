import Image from 'next/image';

import {MainHeader} from '@/app/ui/headers'
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainHeader />
      <div className="w-auto h-screen">
      <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
      </div>
    </main>
  );
}
