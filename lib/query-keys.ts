export const queryKeys = {
  auth: {
    currentUser: ["auth", "current-user"] as const,
  },

  listings: {
    all: ["listings"] as const,

    browse: (params?: unknown) => ["listings", "browse", params] as const,

    detail: (id: string) => ["listings", "detail", id] as const,
  },

  chat: {
    rooms: ["chat", "rooms"] as const,
  },

  interests: {
    all: ["interests"] as const,
  },
};
