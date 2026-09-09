import { createContext, useContext, useMemo, useState } from 'react';
import { REPLIES } from '../data/replies';

const RepliesContext = createContext(null);

export function RepliesProvider({ children }) {
  const [replies, setReplies] = useState(REPLIES);

  const api = useMemo(
    () => ({
      replies,
      addReply: (reply) => {
        setReplies((prev) => {
          const nextId = prev.length ? Math.max(...prev.map((r) => r.id)) + 1 : 1;
          return [...prev, { ...reply, id: nextId }];
        });
      },
      updateReply: (id, updates) => {
        setReplies((prev) => prev.map((r) => (r.id === id ? { ...r, ...updates } : r)));
      },
      deleteReply: (id) => {
        setReplies((prev) => prev.filter((r) => r.id !== id));
      },
      getById: (id) => replies.find((r) => r.id === Number(id)),
    }),
    [replies]
  );

  return <RepliesContext.Provider value={api}>{children}</RepliesContext.Provider>;
}

export function useReplies() {
  const ctx = useContext(RepliesContext);
  if (!ctx) throw new Error('useReplies must be used within a RepliesProvider');
  return ctx;
}
