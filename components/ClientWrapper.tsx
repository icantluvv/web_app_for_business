"use client";

import React, { createContext, useContext, useEffect } from 'react';

const ChannelsContext = createContext<any[]>([]);

export const useChannels = () => useContext(ChannelsContext);

interface ClientWrapperProps {
  children: React.ReactNode;
  initialChannels: any[];
}

const ClientWrapper = ({ children, initialChannels }: ClientWrapperProps) => {
  useEffect(() => {
    localStorage.setItem('channels', JSON.stringify(initialChannels));
  }, [initialChannels]);

  return (
    <ChannelsContext.Provider value={initialChannels}>
      {children}
    </ChannelsContext.Provider>
  );
};

export default ClientWrapper;
