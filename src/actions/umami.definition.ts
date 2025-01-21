export type UmamiAuth = {
  token: string;
  user: {
    id: string;
    username: string;
    createdAt: string;
  };
};

export type UmamiWebsiteItem = {
  id: string;
  name: string;
  domain: string;
  shareId: string | null;
  resetAt: string | null;
  userId: string;
  teamId: string | null;
  createdBy: string;
  createdAt: string;
  updatedAt: string | string;
  deletedAt: string | null;
};
