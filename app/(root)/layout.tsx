import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "OnMeet",
  description: "Online Conferencing App for Ontime Consultants",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        { children }
      </StreamVideoProvider>
    </main>
  )
}

export default layout