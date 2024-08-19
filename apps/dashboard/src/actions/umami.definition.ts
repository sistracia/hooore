export type UmamiAuth = {
  token: string;
  user: {
    id: string;
    username: string;
    createdAt: string;
  };
};

export type UmamiWebsiteItem = {
  id: number;
  websiteUuid: string;
  websiteId: number;
  name: string;
  domain: string;
  shareId: string;
  createdAt: string;
};
